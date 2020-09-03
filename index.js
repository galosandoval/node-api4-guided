const server = require("./api/server.js");

// heroju will add a PORT variable to the environment
// we can read it from there using the process.env object
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
