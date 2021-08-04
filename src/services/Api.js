const getApiData = () => {
  console.log("Obteniendo datos de la Api");
  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          name: character.name,
          image: character.image,
          house: character.house,
          ancestry: character.ancestry,
          id: character.patronus,
        };
      });
      return cleanData;
    });
};

export default getApiData;
