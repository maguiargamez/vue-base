const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <p> {{ 1+1 }} </p>
    // `

    data(){
        return {
            author: "Bruce Wayne",
            quote: "I'm Batman"
        }
    },
    methods: {
        changeQuote(event){
            //console.log(event);
            this.author = 'Manuel Aguiar'
            this.capitalize()
        },
        capitalize(){
            this.quote= this.quote.toUpperCase()
        }
    }
})

app.mount("#myApp")