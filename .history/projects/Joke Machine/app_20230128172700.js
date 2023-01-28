// axios.get("https://icanhazdadjoke.com/").then((res) =>{
//   console.log("Accept: ")
// })

const getDadJoke = async () => {
const config = {headers:{Accept}}
  const response = await axios.get("https://icanhazdadjoke.com/", {headers: {}})
}