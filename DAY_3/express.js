const express = require('express');
const app = express();

const PORT = 4444;

app.get('/home', function(req, res) {
    const continents = ["Asia", "Europe", "Australia", "Africa", "North America", "South America", "Antarctica"];
    const listView = `<h1><u>Welcome to Earth!</u></h1><h3><ul>${continents.map(continent => `<li>${continent}</li>`).join('')}</ul><h3>`;
    res.send(listView);
})

app.get('/asia', (req, res) => {
    res.send("<h2><u>Welcome to Asia!</u></h2><h3>Asia is the world's largest continent of the seven continents in size and population.</h3>");
})

app.get('/europe', (req,res) =>{
    res.send("<h2><u>Welcome to Europe!</u></h2><h3>Europe and Asia are parts of the same major landmass -- Europe is separated from Asia by the Ural mountains and the Caspian Sea.</h3>");
})

app.get('/africa', (req, res) => {
    res.send("<h2><u>Welcome to Africa!</u></h2><h3>Of the seven continents of the world, Africa is the second largest.</h3>");
})

app.get('/australia', (req, res) => {
    res.send("<h2><u>Welcome to Australia!</u></h2><h3>Australia is the world's smallest continent and is also known as an 'island continent' as it is surrounded by water on all sides.</h3>");
})

app.get('/northAmerica', (req, res) => {
    res.send("<h2><u>Welcome to North America!</u></h2><h3>North America has five time zones and is the only continent with every type of climate.</h3>");
})

app.get('/southAmerica', (req, res) => {
    res.send("<h2><u>Welcome to South America!</u></h2><h3>The world's largest river as per water volume and the second longest (6440 km) -- the Amazon -- is in South America.</h3>");
})

app.get('/antarctica', (req, res) => {
    res.send("<h2><u>Welcome to Antarctica!</u></h2><h3>Antarctica is not only the coldest place on Earth but also the highest, driest, windiest and emptiest.</h3>");
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});