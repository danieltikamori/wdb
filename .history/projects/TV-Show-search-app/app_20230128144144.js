const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const Queryresult = axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)

})