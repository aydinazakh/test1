document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', ()=>({
        mainUsers: [],
        users: [],
        pageUsers: [],
        isLoading: false,
        showAddModal: false,
        pageCount: 1,
        itemsCount: 3,
        currentpage: 1,
        searchChar:"",
        getUsers(){
            this.isLoading = true
            axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                this.mainUsers = res.data
                this.users = res.data
                this.pagination()
            }).finally(()=>{
                this.isLoading = false
            })
        },
        pagination(){
            this.pageCount = Math.ceil(this.users.length / this.itemsCount)
            const start = (this.currentpage * this.itemsCount) - this.itemsCount
            const end = this.currentpage * this.itemsCount
            this.pageUsers = this.users.slice(start,end)
        },
        nextpage(){
            this.currentpage++
            if (this.currentpage > this.pageCount) this.currentpage = this.pageCount
            this.pagination()
        },
        prevpage(){
            this.currentpage--
            if (this.currentpage < 1) this.currentpage = 1
            this.pagination()
        },
        handleChangeItemsCount(value){
            this.currentpage = 1
            if (value < 1) this.itemsCount = 1
            if (value > this.users.length) this.itemsCount = this.users.length 
        },
        handleSearch(value){
            this.users = this.mainUsers.filter(user=>( user.name.includes(value) || user.
            username.includes(value) || user.email.includes(value)))
            this.currentpage = 1
            this.pagination()
        }
    }))
})