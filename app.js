const app = Vue.createApp({
    // data, function or template
    // template: '<h1>This is the template</h1>'
    data() {
        return {
            url: 'https://elearning.strathmore.edu/login/index.php',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpeg', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/1.jpeg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson ', img: 'assets/1.jpeg', isFav: true }
            ],
            x: 0,
            y: 0
        }
    }, 
    methods: { 
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(event, data) {
            console.log(event, event.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove (event) {
            this.x = event.offsetX
            this.y = event.offsetY 
        },
        toggleIsFav (book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return 'hello'
        }
    }
})


app.mount('#app')