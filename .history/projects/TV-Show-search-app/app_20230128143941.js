const form = document.querySelector('#searchForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  axios.get()
})