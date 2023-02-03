// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   .catch((err) => {
//     console.log("ERROR: ", err);
//   });

  const getStarWarsPerson = async (id) => {
    try {
    const result = await axios.get(`https://swapi.dev/api/people/${id}/`);
console.log(result.data);
    } catch(err) {
      console.log("ERROR: ", err);
    }
  }

getStarWarsPerson(5);