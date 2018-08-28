<template> 
    <div class="test"> 
        <input type="text" v-model="title"/>

        <h1> {{title}}</h1>
        {{ user.   first_name}}
          <p v-test="user.last_name">   </p>
          <p v-if="showName">  {{user.first_name}}   </p>
          <ul>
              <li v-for="item in items">  {{ item.title }} </li>
          </ul>
       <button v-on:click="greet()"> Say greeting </button>
    </div>
</template>


<script>
    export default {
        name:'test',
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
            greet: function () {
                alert('greeting')
            }
        }
    }
</script>



<style scoped>
    
</style>