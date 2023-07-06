const server = require("./src/server");
const { conn } = require("./src/db.js");
const fillDb = require("./fillDb");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, async () => {
      console.log(`Server listening on port ${PORT}`);
      await fillDb();
      console.log("Database was successfully filled");
    });
  })
  .catch((error) => console.error(error));
