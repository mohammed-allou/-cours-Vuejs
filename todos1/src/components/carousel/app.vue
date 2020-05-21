<template>
  <div >
   <carousel>
       <carousel-slide>
           salut lwaghech
       </carousel-slide>
       <carousel-slide>
           salam lwaghech
       </carousel-slide>
   </carousel>
    <todos v-model="todos"></todos>
    

  </div>
</template>

<script>
import Todos from'./components/Todos'


export default {
  
  data(){
    return{
      todos:[{
        name:'Demo',
        completed:true
      }]
    }
  },
  methods:{
    addTodo() {
      this.todos.push({
        name:'med',
        completed:false
      })
    }
  },
  components:{
    Todos
  }
}
</script>


