document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', ()=>({
        users: [],
        pageUsers: [],
        isLoading: false,
        showAddModal: false,
        pageCount: 1,
        itemsCount: 3,
        currentpage: 1,
        getUsers(){
            this.isLoading = true
            axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
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
        }
    }))
})