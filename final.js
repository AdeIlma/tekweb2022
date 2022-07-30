let apiUrl = "https://myapi.watanabeilma.my.id/index.php/";
let app = Vue.createApp({
  data() {
    return {
      articles: {},
      portofolios: {},
      markdown: null,
    };
  },
  methods: {
    getPortofolioData() {
      axios
        .get(apiUrl+"portofolio")
        .then((res) => {
          this.portofolios = res.data;
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 
    getArticleData() {
      axios
        .get(apiUrl+"articles")
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
    this.getPortofolioData();
  },
});
app.mount('#app');
