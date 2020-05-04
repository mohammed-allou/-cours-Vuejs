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
let vm = new Vue({
	el:"#app",
	data :{
		firstname : 'momo',
		lastname: 'pilou',
		fullName : ' '
	},
	watch : {
		fullName : function(value){
			console.log('watch',value)
		}
	}
	

})