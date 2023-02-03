// axios.get("https://icanhazdadjoke.com/").then((res) =>{
//   console.log("Accept: ")
// })

const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const response = await axios.get("https://icanhazdadjoke.com/", config);
console.log(response.d)
};
