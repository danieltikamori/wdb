// axios.get("https://icanhazdadjoke.com/").then((res) =>{
//   console.log("Accept: ")
// })

const getDadJoke = async () => {
const config = {}
  const response = await axios.get("https://icanhazdadjoke.com/", {headers: {}})
}