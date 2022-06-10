const express = require('express');
const routes = require('./routes.js');
const  corsConfig  = require('./middlewares/corsConfig.js'); 
const { initDatabase } = require('./config/databaseConfig.js');
const { PORT } = require('./constants.js');
const { auth } = require('./middlewares/authMiddleware.js');


const app = express();

corsConfig(app);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(auth);

app.get('/', (req, res) => {
    res.json({text: 'it is working'})
});

app.use(routes);
app.use((err, req, res, next) => {
    res.status(err.statusCode || 400).json({message: err.message});
    next();
})

initDatabase()
    .then(() => {
        app.listen(PORT, () => console.log('App running on port ' + PORT + '...' ));
    })
    .catch(error => {
        console.log(error);
    });
