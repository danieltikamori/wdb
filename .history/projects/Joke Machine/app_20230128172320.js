axios.get("https://icanhazdadjoke.com/").then((res) =>{
  console.log("Accept: ")
})

const getDadJoke = async () => {
  const response = await axios.get("https://icanhazdadjoke.com/")
  return res.data
}