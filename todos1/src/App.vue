<template>
  <div >
    <carousel>
       <carousel-slide v-for"n in slides" :index="n-1">
           <div style="position:absolute;left:0;right:0; text-align:center;top:50%;color:;font-size:15px;">
             salut tous le monde
           </div>
           <img src="./components/carousel/logopsum1.jpg" width="30%">
       </carousel-slide>
       <carousel-slide>
          <div style="position:absolute;left:0;right:0; text-align:center;top:50%;color:gray;font-size:15px;">
               salam mes amis
          </div>
           <img src="./components/carousel/logopsum2.jpg" width="30%">

       </carousel-slide>
      
   </carousel>
   <button @click="addSlide">Ajouter un slide</button>
   <button @click="removeSlide">Supprimer un slide</button>
   
    <todos v-model="todos"></todos>
  </div>
</template>

<script>
import Todos from'./components/Todos'
import carousel from './components/carousel/carousel'
import carouselSlide from './components/carousel/carouselSlide'
export default {
  
  data(){
    return{
      slides:2,
      todos:[{
        name:'Demo',
        completed:true
      }]
    }
  },
  watch:{
    slides(slides){
      if(this.index >= this.slidesCount){
        this.index=this.slidesCount -1
      }
    }
  },
  computed:{
    slidesCount (){return this.slides.length}
  },
  methods:{
    addTodo() {
      this.todos.push({
        name:'med',
        completed:false
      })
    },
    addSlide(){
      this.slides++
    },Slide(){
      this.slides--
    }
  },
  components:{
    Todos,
    carousel,
    carouselSlide
  }
}
</script>
