import express from "express";
import axios from "axios";


const app = express()
const port = 3000

app.use(express.static("public"))



app.get("/", async (req,res) =>{
  try {
  const response = await axios.get("https://secrets-api.appbrewery.com/random");
  const result = response.data
  console.log(result)
  
  res.render("index.ejs", {
    secret: result.secret,
    user: result.username
  })
  } catch(error) {
    console.log(response.error.data)
    res.status(500)
  }
})


app.listen(port , () =>{
  console.log(`Your server is running on: localhost:${port}`)
})
