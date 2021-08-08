const getApiData = () => {
  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          name: character.name,
          image: character.image,
          id: character.patronus,
          house: character.house,
          ancestry: character.ancestry,
        };
      });
      console.log(cleanData);
      return cleanData;
    });
};

export default getApiData;
