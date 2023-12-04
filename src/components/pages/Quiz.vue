<script >
import axios from 'axios'
export default {


data() {
        return {
            // questions:[
            //     {
            //         question:"Rolex is a company that specializes in what type of product?",
            //         answers:{a: 'Bags', b: 'Watches', c:'Shoes',d: 'laptops'},
            //          correctAnswer:'c'
                   
            //     },
            //     {
            //         question:"when did Facbook launch?",
            //         answers:{a: '2005', b: '2008', c:'2003',d: '2004'},
            //         correctAnswer:'d'
            //     },
               
            //     {
            //         question:"What amount of bits commonly equals one byte?",
            //         answers:{a: '1', b: '2', c:'64',d: '8'},
            //         correctAnswer:'b'
            //     },
            //     {
            //     question:"HTML is what type of language?",
            //     answers:{ 
            //     a:'Markup Language',
            //     b: 'Macro Language',
            //     c:'Programming Language',
            //     d:'Scripting Language'},
            //     correctAnswer:'a'
            //     }
                
            // ],
            questions:[],
            index: 0,
            param:this.$route.params.category,
            selectedAnswer : '',
            correctAnswer:0,
            wrongAnswer:0,
            countdown:30,
            count:4,
            

        }
    
    },
    watch: {
    '$store.state.list': {
      handler() {
        this.getData();
      },
      immediate: true
    } 
  },
    methods:{
        //  methods pour increment corect answer ila kan s7i7
        getData(){
            axios.get('quiz.json')
            .then(json=>{
                let data=json.data
                this.questions.push(...data[this.param]);
            })
        },
        answered(e){
       this.selectedAnswer = e.target.value
       if(this.selectedAnswer == this.questions[this.index] ['correctAnswer'])
            this.correctAnswer++
       else
            this.wrongAnswer++
       console.log(this.correctAnswer+""+this.wrongAnswer)
        },
        nextQuestion(){
            this.index++
            this.selectedAnswer = ''
            this.CountDownTimer()
        },
        showResults () {
            this.index++
           
        },
        resetQuiz (){
            this.index=0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        },
        CountDownTimer() {
            if(this.countdown>0){
                setTimeout(()=>{
                    this.countdown-=1;
                this.CountDownTimer()
                },1000)
            }
        }
        
       
    }}

</script>


<template>
    <div class="flex justify-center items-center h-full w-10/12 bg-gray-200 ">
    <div class="w-full max-w-xl">
                <h1 class="font-bod font-bold text-5xl text-center text-indigo-700"> Quiz App</h1>
             
                  
                <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
                    <div v-if="index < count">
                    <p class="text-2xl font-bold">
                        {{questions[index]['question']}}
                    </p>
                    <label
                    :for="key"
                    class="block mt-4 borer border-gray-300 rounded-lg py-2 px-6 text-lg"
                   v-for="answer,key in questions[index]['answers']"

                   :class="{'hover:bg-gray-100 cursor-pointer' : selectedAnswer == ''},
                   {'bg-red-200' : selectedAnswer == key},
                   {'bg-green-200' : key == questions[index] ['correctAnswer'] && selectedAnswer !=''}"
                   >
                <input 
                 type="radio"
                 :id="key"
                  class="hidden"
                  :value="key"
                  @change="answered($event)"
                  :disabled="selectedAnswer != ''"
                  
                  />
             {{answer}}
                </label>
                <div class="mt-6 flow-root">
                <button class="float-right px-2 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wider rounded-full "
                    v-show="selectedAnswer != '' && index < count-1"
                   @click=" nextQuestion">
               Next &gt;</button>
               <button class="float-right px-2 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wider rounded-full "
               v-show="selectedAnswer != '' && index == count-1"
               @click="showResults ">
               Finish 
          </button>
        </div>
            </div>
            <div v-else> 
                <h2 class="text-bold text-xl">  Results </h2>
                <div class="flex justify-start space-x-4 mt-6">
                    <p>
                        Correct Answers:
                        <span class="text-2xl text-green-700 font-bold">
                            {{correctAnswer}}
                        </span>
                    </p>
                    <p>
                       Wrong Answers:
                        <span class="text-2xl text-red-700 font-bold">
                            {{wrongAnswer}}
                        </span>
                    </p>
                </div>
                <div class="mt-6 flow-root">
                    <button class="float-right px-2 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wider rounded-full "

                       @click=" resetQuiz">
                  Play Again</button>
                </div>
            </div>
                </div>
            </div>
            </div>
            <h1>{{ countdown }}</h1>
            
           

</template>
