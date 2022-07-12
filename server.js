/*const express = require("express");
//var http = require("http");
const app = express();
//const port= 4000
const port=process.env.PORT||5000;
const actions = require('./actions')
const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://RiyaApp:riyanewapp1234@cluster0.inlryuf.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error: "));
db.once("open",function(){
    console.log("Connected MongoDB");
});

app.listen(port,function(){
    console.log("Server is running on port", port);
});

app.get('/', (req,res)=>{
    res.send("Hello"); 
});

app.post('/userIssue/createUserIssue',actions.addNew)

app.use(express.json());
const UserIssueRoute = require("./routes/issues");
app.use("/userIssue", UserIssueRoute);

*/
const express = require("express"); //importing express
const app = express(); //making express object.
const port = process.env.PORT || 5000;
const server = require("http").createServer(app);
const userIssue = require("./models/user_issues_model");

const io = require("socket.io")(server);

//socket io
io.of("/api/socket").on("connect", (socket) => {
  console.log("socket.io: User connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("socket.io: User disconnected: ", socket.id);
  });
});

// getting-started.js
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://RiyaApp:riyanewapp1234@cluster0.inlryuf.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("hurray! Mongo db connected");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(express.json());
const UserIssueRoute = require("./routes/issues");
app.use("/userIssue", UserIssueRoute);

