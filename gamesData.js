const gameModel = require("./models/game");

function fetchData() {
  gameModel.findAll().then((games) => {
    if (!games.length) {
      fetch(`https://www.freetogame.com/api/games`).then((response) =>
        response.json().then((data) => {
          const filtereData = data.map((item) => ({
            id: item.id,
            title: item.title,
            thumbnail: item.thumbnail,
            short_description: item.short_description,
            genre: item.genre,
            platform: item.platform,
            release_date: item.release_date,
          }));
          gameModel.destroy({ where: {}, truncate: true, cascade: true });
          gameModel.bulkCreate(filtereData).then(() => {
            console.log("data has been inserted into the database");
          });
        })
      );
    }
  });
}
module.exports = fetchData;
