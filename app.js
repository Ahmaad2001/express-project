const PORT = 8000;
const express = require("express");
const app = express();

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
