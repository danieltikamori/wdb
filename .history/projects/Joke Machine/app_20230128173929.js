// axios.get("https://icanhazdadjoke.com/").then((res) =>{
//   console.log("Accept: ")
// })

const jokes = document.querySelector('#jokes');
const button = document
const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const response = await axios.get("https://icanhazdadjoke.com/", config);
console.log(response.data.joke)
const newLI = document.createElement("LI");
newLI.append(response.data.joke);
jokes.append(newLI);
};
