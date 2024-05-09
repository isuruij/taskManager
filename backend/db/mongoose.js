const mongoose = require("mongoose");
const monogdbURL = "mongodb+srv://user:123@cluster0.kcbchsk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(monogdbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected!");
});

