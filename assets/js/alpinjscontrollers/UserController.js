document.addEventListener('alpine:init', () => {
    Alpine.data('usersData' , function(){
        return {
            users: [],
            gitusers(){
                axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                    this.users = res.data
                    console.log(res);
                })
            }
        }    
    })
})