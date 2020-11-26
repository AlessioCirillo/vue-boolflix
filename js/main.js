const app = new Vue({
    el: '#app',
    
    data:{
        movies:[],
        series:[],
        searchBar:''
    },

    methods:{
        search(){
            this.getMovies();
            this.getSeries();
        },

        getMovies(){
            axios.get('https://api.themoviedb.org/3/search/movie?',{
                params:{
                    api_key: 'cbadb2020a9a1deec5f8094ca2623fe0',
                    query: this.searchBar,
                    language: 'it-IT'
                }
            })
            .then(result => {
                // handle success
                console.log(result);
                this.movies = result.data.results
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
        },

        getSeries(){
            axios.get('https://api.themoviedb.org/3/search/tv?',{
                params:{
                    api_key: 'cbadb2020a9a1deec5f8094ca2623fe0',
                    query: this.searchBar,
                    language: 'it-IT'
                }
            })
            .then(result => {
                // handle success
                console.log(result);
                this.series = result.data.results
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
        },

        getStar(vote){
             return Math.ceil(vote / 2);
        },

        flag(language){
            return `./img/${language}.png`
        },

        poster(link){
            return `https://image.tmdb.org/t/p/w342${link}`
        }
        
    }
});