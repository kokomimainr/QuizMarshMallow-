const express = require("express");
const serverConfig = require("./config/serverConfig");
const indexRouter = require("./routes/index.routes");

const app = express();
const PORT = process.env.PORT || 3000;

serverConfig(app);

app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log(`Порт на ${PORT}`);
});
