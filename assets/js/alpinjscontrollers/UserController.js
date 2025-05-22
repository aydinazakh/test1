document.addEventListener('alpine:init', () => {
    Alpine.data('usersData' , function(){
        return {
            users: [],
            isLoading: false,
            gitusers(){
                this.isLoading - true
                axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                    this.users = res.data
                }).finaly(()=>{
                    this.isloading = false
                })
            }
        }    
    })
})