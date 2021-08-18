const getApiData = () => {
  return fetch("https://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          name: character.name,
          image: character.image,
          id: character.actor,
          house: character.house,
          ancestry: character.ancestry,
          patronus: character.patronus,
          birth: character.dateOfBirth,
        };
      });
      console.log(cleanData);
      return cleanData;
    });
};

export default getApiData;
