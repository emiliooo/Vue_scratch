<template> 
    <div id="user"> 
       <h1> users </h1>
       <form v-on:submit="addUser">
         <input type="text" v-model="newUser.name" placeholder="userName">
         <br/>
         <input type="text" v-model="newUser.email" placeholder="Email">
         <br/>
         <input type="submit" value="Submit">
       </form>
       <ul>
           <li v-for="user in users">
                <input type="checkbox" class="toggle" v-model="user.contacted" >
                <span :class="{contacted:user.contacted}">
                        {{user.name}} : {{user.email}}
                        <button v-on:click="deleteUser(user)"> X </button>
                </span>
           </li>
       </ul>
    </div>
</template>


<script>
    export default {
        name:'users',
        data() {
            return {
                newUser:[
                  {  name:'',
                    email:''
                  }
                ],
                users:[  ]
          
            }
        },
        methods :{
            addUser() {
                console.log(this.users)
                this.users.push({
                    name: this.newUser.name,
                    email: this.newUser.email,
                    contacted:false
                    })
            },
            deleteUser(user) {
               this.users.splice(this.users.indexOf(user),1);
            }
        },
        created:function() {
            this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(function(res) {
                this.users = res.data;
            })
        }
    }
</script>



<style scoped>
    .contacted{
        text-decoration:line-through;
        color:red;
    }
</style>