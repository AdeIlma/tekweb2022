let apiUrl = 'https://myapi.watanabeilma.my.id/index.php/';
let app = Vue.createApp({
  data() {
    return {
      articles: {},
      markdown: null,
    };
  },
  methods: {
    getArticleData() {
      axios
        .get(apiUrl + '/articles')
        .then((res) => {
          this.articles = res.data;
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getArticleData();
  },
});
app.mount('#app');
