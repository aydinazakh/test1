document.addEventListener('alpine:init', () => {
    Alpine.data('usersData' , ()=>({
        users: [],
        isLoading: false,
        showAddModal: false,
        gitusers(){
            this.isLoading = true
            axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                this.users = res.data
            }).finaly(()=>{
                this.isloading = false
            })
        }    
    }))
})