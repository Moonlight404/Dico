const app = new Vue({
    el: "#app",
    data: {
        aprender: [
            'A  linguagens dos cães.',
            'Comportamento e humor do cão em cada situação.',
            'Cuidados com seu cachorrinho.',
            'Alimentos que podem estragar a saúde do seu cão.',
            'Curiosidades sobre seu cão.',
            'Como os cães aprendem.',
            'Adestramento iniciante.',
            'Adestramento avançado.',
            'Cão velho aprende? Como adestrar?'
        ],
        menuOpened: false
    },
    methods: {
        openMenu(){
            if(this.menuOpened){
                this.menuOpened = false
            } else{
                this.menuOpened = true
            }
        }
    }
})
