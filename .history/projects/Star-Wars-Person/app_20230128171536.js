axios
  .get("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESPONSE: ", res);
  })
  .catch((err) => {
    console.log("ERROR: ", err);
  });

  const getStarWarsPerson = async () => {
    const result = await axios.get(`https://swapi.dev/api/people//`)
  }