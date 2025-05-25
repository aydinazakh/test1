document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', ()=>({
        users: [],
        pageUsers: [],
        isLoading: false,
        showAddModal: false,
        pageCount: 1,
        itemsCount: 3,
        currentpage: 2,
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
            let start = (this.currentpage * this.itemsCount) - this.itemsCount
            let end = this.currentpage * this.itemsCount
            this.pageUsers = this.users.slice(start,end)
            console.log(this.pageUsers);
        }
    }))
})