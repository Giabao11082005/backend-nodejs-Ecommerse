const app = require("./src/app");
const PORT = 3055;

const server = app.listen(PORT, function (error) {
  if (error) console.log(`Error when start server`, error);
  else console.log(`Server running on PORT ${PORT}`);
});

// process.on("SIGINT", () => {
//   server.close(() => {
//     console.log(`Exit Server Express`);
//   });
// });
