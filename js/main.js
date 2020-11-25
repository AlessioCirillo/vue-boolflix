const app = new Vue({
    el: '#app',
    
    data:{
        movies:[],
        searchBar:''
    },

    methods:{
        search(){
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

        getStar(vote){
             return Math.ceil(vote / 2);
        },

        flag(language){
            return (language === 'it' || language === 'en') ? `./img/${language}.png` : '';
        }
        
    }
});