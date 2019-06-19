const app = require('express')();

app.get("/", (req, res) => {
    console.log("Hey this is working")
})


app.listen(8080, () => {
    console.log("Server is up")
})