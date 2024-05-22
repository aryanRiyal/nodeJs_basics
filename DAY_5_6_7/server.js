require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const {connectDB, closeDB} = require('./config/db');
//const {ContinentsEnum, Continent} = require('./models/continent');

const app = express();

app.use(bodyParser.json());     //req.body

connectDB();

app.get(['/', '/home'], function(req, res) {
    res.send("HOME");
    // try{
    //     const listView = `<h1><u>Welcome to Earth!</u></h1><h3><ul>${ContinentsEnum.map(continent => `<li>${continent}</li>`).join('')}</ul><h3>`;
    //     res.send(listView);
    // } catch (err) {
    //     console.error(err);
    //     res.status(500).send("Something went wrong!!");
    // }
});

// app.get('/asia', (req, res) => {
//     res.send("<h2><u>Welcome to Asia!</u></h2><h3>Asia is the world's largest continent of the seven continents in size and population.</h3>");
// })
// app.get('/europe', (req,res) =>{
//     res.send("<h2><u>Welcome to Europe!</u></h2><h3>Europe and Asia are parts of the same major landmass -- Europe is separated from Asia by the Ural mountains and the Caspian Sea.</h3>");
// })
// app.get('/africa', (req, res) => {
//     res.send("<h2><u>Welcome to Africa!</u></h2><h3>Of the seven continents of the world, Africa is the second largest.</h3>");
// })
// app.get('/australia', (req, res) => {
//     res.send("<h2><u>Welcome to Australia!</u></h2><h3>Australia is the world's smallest continent and is also known as an 'island continent' as it is surrounded by water on all sides.</h3>");
// })
// app.get('/northAmerica', (req, res) => {
//     res.send("<h2><u>Welcome to North America!</u></h2><h3>North America has five time zones and is the only continent with every type of climate.</h3>");
// })
// app.get('/southAmerica', (req, res) => {
//     res.send("<h2><u>Welcome to South America!</u></h2><h3>The world's largest river as per water volume and the second longest (6440 km) -- the Amazon -- is in South America.</h3>");
// })
// app.get('/antarctica', (req, res) => {
//     res.send("<h2><u>Welcome to Antarctica!</u></h2><h3>Antarctica is not only the coldest place on Earth but also the highest, driest, windiest and emptiest.</h3>");
// })

const continentRoutes = require('./routes/continentRoutes');
app.use('/continent', continentRoutes);

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});

// Handle graceful shutdown
const gracefulShutdown = async (signal) => {
    console.log(`\n${signal} received: closing HTTP Server`);
    server.close(async () => {
        console.log("Http server closed");
        await closeDB();
        process.exit(0);
    })
}

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));