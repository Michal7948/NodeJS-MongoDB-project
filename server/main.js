const express = require("express");
const productsRouter = require("./routers/productRouter");
const usersRouter=require('./routers/userRouter');
const app = express();
const cors = require("cors");
const corsOptions = {
   origin:'*', 
   credentials: true,         
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))
app.use(express.json());
require('./db/mongoConnect');
app.use("/api/products", productsRouter);
app.use("/api/users",usersRouter);
app.listen("8000",()=>{
  console.log("connect server")
});
console.log("Hi!!");


