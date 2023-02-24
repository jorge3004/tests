const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
// app.get('/', (req, res) => {
//     console.log("object");
//     res.send('Hellos Wofrldg');
// });

app.use(express.static("public"));
app.listen(PORT, HOST, () => {
    console.log("sdjn");
    console.log(`Running on http://${HOST}:${PORT}`);
});