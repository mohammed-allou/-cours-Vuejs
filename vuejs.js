/*
 let vm = new Vue({
	el:'#app',
	data: {
		message: 'salam lwaghech',
		link: 'http://google.com',
		persons:['momo','toto','gigi','mimo','koka'],
		success : true
		
	},
	methods : {
		addPerson:function () {
			this.persons.push('moustach')
		},
		
	}
});*/

// let vm = new Vue({
// 	el : '#app',
// 	data : {
// 		seconds : 0
// 	},
// 	mounted: function(){
// 		this.$interval = setInterval(() =>{
// 			console.log('Time')
// 			this.seconds++
// 		},1000)
// 	},
// 	destroyed:function(){
// 		clearInterval(this.$interval)
// 	}
// })

// let vm = new Vue({
// 	el : '#app',
// 	data : {
// 		success : false,
// 		message : " "
// 	},
// 	computed :{
// 		cls: function(){
// 			console.log('cls called')
// 		return this.success === true ? 'success' : 'error'
// 		}
// 	}
// })

// PROPRIETES COMBINE ___________________________//
// let vm = new Vue({
// 	el:"#app",
// 	data :{
// 		firstname : 'momo',
// 		lastname: 'pilou'
// 	},
// 	computed :{
// 		fullName:{
// 			get :function(){		
// 				return this.firstname + ' '+ this.lastname
// 				},
// 			set : function(value){
// 				let parts = value.split (' ')
// 				this.firstname = parts[0]
// 				this.lastname = parts[1]
// 				console.log(value)
// 			}
// 		}
// 	}
// })

// le systéme Watchers qui detecte lorsqu'une variable a été modifier 
// let vm = new Vue({
// 	el:"#app",
// 	data :{
// 		firstname : 'momo',
// 		lastname: 'pilou',
// 		fullName : ' '
// 	},
// 	watch : {
// 		fullName : function(value){
// 			console.log('watch',value)
// 		}
// 	}
	

// })
// mabghach yekhdem_______________________
// let salam = function(el,binding){
// 	el.value=binding.value
// 	console.log('bind')
// }

// let vm = new Vue({
// 	el:"#app",
// 	directives:{
// 		salam 
// 	},
// 	data :{
// 		message: 'pilou',
// 	},
// 	methods : {
// 		Demo : function(){
// 			console.log('salam3lykoum')
// 		},
// 		demo2 : function(){
// 			console.log('demo2')
// 		}
// 	}
// })

// //les filtres_____________________________________
// Vue.filter('capitalize',function(value, prefix,suffix){
// 	return prefix + value.toUpperCase() + suffix 
// })

// Vue.filter('reverse',function(value){
// 	return value.split('').reverse().join('')
// })
// new Vue({
// 	el : '#app',
	
// 	data :{
// 		message : 'ramadan mobarak'
// 	}
// })
//une autre maniére pour déclarer les filtres________

// let capitalize =function(value, prefix,suffix){
// 	return prefix + value.toUpperCase() + suffix 
// }

// new Vue({
// 	el : '#app',
// 	filters : {capitalize},	
// 	data :{
// 		message : 'ramadan mobarak'
// 	}
// })

// les composants ____props un tableau_____________________________

// Vue.component('message',{
// 	props :[ "type","message"],
// 	template : `<div class="ui message":class="type">{{message}}</div>`
// })
// let vm = new Vue({
// 	el:"#app",
// 	data :{
// 	  message: 'salam 3alaykoum',
// 	},
// 	methods : {
// 	  Demo : function(){
// 	   console.log('salam3lykoum')
// 	},
// 	  demo2 : function(){
// 	   console.log('demo2')
// 	}
// 	}
// })

// les composents __ props  un objet ________________________
let message ={
	props:{
		type: {type: String, default: 'success'},
		messege: String,
		header: String

		},
	template: `<div class="ui message" :class="type">
	<i class="close icon"@click="close"></i>
	<div class="header">{{ header }}</div>
	{{message}}
	</div>`,
	methods:{
		close(){
			console.log(this.$parent)
		}
	}
}
let counter ={
	data: function(){
		return {
			count: 0
		}
	},
	props: {
		start:{type: Number,default:0}
	},
	methods: {
		increment :function(){
		this.count ++
		}
	},
	
	template: `<button @click="increment">{{ count }}</button>`,

	mounted: function() {
		this.count = this.start
	}
		// 	template: `<div>
		// 	<span>{{ count }}</span><br>
		// 	<button @click="increment">Incrémenter</button>
		// 	</div>`
 }
 let formUser ={
	 props:{
		value:Object
	 },
	 data() {
		return{
			user:JSON.parse(JSON.stringify(this.value))
		}
	 },
	 methods:{
		 save(){
			 this.$emit('input',this.user)
		 }
	 },
	 template:`
	 <form class="ui form" @submit.prevent="save">
	 <div class="field">
	 <label for="">Prénom</label>
	 <input type="text" v-model="user.firstname">
	 </div>
	 <div class="field">
	 <label for="">Nom</label>
	 <input type="text" v-model="user.lastname">
	 </div>
	 <button class="ui button" type="submit">Envoyer</button>
	 </form>`
	 ,
 }
let vm = new Vue({
	el:"#app",
	components: {message, counter,formUser},
	data:{
	 message: 'salam 3alaykoum ',
	 alert: false,
	 user :{
		 firstname: 'pilou',
		 lastname: 'momo'
	 }
	},
	methods:{
		showAlert(){
			this.alert = true
		},
		hideAlert(){
			this.alert = false
		}
	}
})
