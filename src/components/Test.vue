<template> 
    <div > 
        <input type="text" v-model="title"/>
        <h1> {{title}}</h1>
        {{ user.first_name}}
          <p v-test="user.last_name">   </p>
          <p v-if="showName">  {{user.first_name}}   </p>
          <ul>
              <li v-for="item in items">  {{ item.title }} </li>
          </ul>
       <button v-on:click="greet(title)"> Say greeting </button>
       </br>
       <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="hitenter"/>

       <br/><br/><br/>
       <label> First Name: </label> <input type="text" v-model="user.first_name"/>
       <br/>
       <label> Last Name: </label> <input type="text" v-model="user.last_name"/>
           <br/><br/><br/>
       {{fullname}}

       {{msg}}
    </div>
</template>


<script>
    export default {
        name:'test',
        props : {
            msg:{
                type:String,
                default:'Foobar'
            }
        },
        data() {
            return {
                title:'hello world',
                user: {
                    first_name : 'Jone',
                    last_name :' Mikowski'
                },
                showName:false,
                items:[
                       {title:'one'},
                       {title:'tree'},
                       {title:'fore'},
                       {title:'six'},
                ]
            }
        },
        methods :{
            greet: function (txt) {
                alert('witaj  ' + txt)
            },
            pressKey :function (e) {
                console.log(e.target.value);
            },
            hitenter: function () {
                console.log('yu hit enter');
            }
        },
        computed: {
            fullname: function() {
                return this.user.first_name + ' ' + this.user.last_name;
            }
        }
    }
</script>



<style scoped>
    
</style>