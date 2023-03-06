const express = require('express');
const { main } = require('./src/public/js/main');
require('dotenv').config()

// App
const app = express();
// app.get('/', (req, res) => {
//     console.log("Hello");
//     res.send('Hello');
// });

app.use(express.static("src/public"));
app.listen(process.env.TARGET_PORT, () => {
    console.log(`Running on http://${"localhost"}:${process.env.PUBLISHED_PORT}`);
    console.table(main());
});
