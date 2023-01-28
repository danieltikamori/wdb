const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const configParams = { params: {} };
  const queryResult = await axios.get(
    `https://api.tvmaze.com/search/shows`;
  );
  displaytvshowImg(queryResult.data);
  form.elements.query.value = '';
});

const displaytvshowImg = (shows) => {
  for (let showResult of shows) {
    if (showResult.show.image) {
      const tvshowImg = document.createElement("IMG");
      tvshowImg.src = showResult.show.image.medium;
      document.body.append(tvshowImg);
    }
  }
};
