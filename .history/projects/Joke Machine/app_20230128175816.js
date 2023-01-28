// axios.get("https://icanhazdadjoke.com/").then((res) =>{
//   console.log("Accept: ")
// })

const jokes = document.querySelector('#jokes');
const button = document.querySelector('#jokeButton');
button.addEventListener('click', addNewJoke);

const addNewJoke = async () => {
  const jokeText = await getDadJoke()
  const newLI = document.createElement("LI");
  new
  newLI.append(newLI);
}

const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const response = await axios.get("https://icanhazdadjoke.com/", config);
return response.data.joke
};
