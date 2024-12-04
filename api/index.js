const express = require("express");
const app = express();  
const dotenv = require("dotenv");
const products = require("./data/Products");

dotenv.config()
const PORT = process.env.PORT;
const cors = require ("cors");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGOOSEDB_URL)
  .then(() => console.log("db connected"))
  .then((err) => {
    err;
  });

const databaseSeeder = require('./databaseSeeder');
const userRoute = require('./routes/User');
app.use(express.json());
app.use(cors());
app.use(express.json());

//database seeder routes
app.use('/api/seed', databaseSeeder);
//Routes for users
app.use('/api/users', userRoute);

app.listen(PORT || 5000, ()=>{
    console.log(`server listening on port ${PORT}`);
}); 




//test route
//app.get("/api/products", (req, res) =>{
    
  //  res.json(products);
//});

//app.get("/api/products/:id", (req, res) =>{
    
 //   const product = products.find((product)=>product.id == req.params.id);
  //  res.json(product);
//});

//Mongo user: donaldo
//Mongo pass: E..97*
//mongodb+srv://donaldo:Emiliano97*@cluster0.odyta.mongodb.net/Adonnies DB
