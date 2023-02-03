const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const queryResult = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  const tvshowImg = document.createElement("IMG");
  tvshowImg.src = queryResult.data[0].show.image.medium;
  document.body.append(tvshowImg);
});

const displaytvshowImg = (shows) => 
