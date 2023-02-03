// axios.get("https://icanhazdadjoke.com/").then((res) =>{
//   console.log("Accept: ")
// })

const getDadJoke = async () => {
  const response = await axios.get("https://icanhazdadjoke.com/")
  return response.data
  console.log(response
    )
}