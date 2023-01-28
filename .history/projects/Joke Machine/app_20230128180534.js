// axios.get("https://icanhazdadjoke.com/").then((res) =>{
//   console.log("Accept: ")
// })

const jokes = document.querySelector("#jokes");
const button = document.querySelector("#jokeButton");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const response = await axios.get("https://icanhazdadjoke.com/", config);
    return response.data.joke;
  } catch (err) {
    return "No jokes available! ";
  }
};
button.addEventListener("click", addNewJoke); //Event listener must be after the function
