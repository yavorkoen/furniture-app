
function corsConfig (app)  {
    app.use((req, res, next) => {

        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000' );
    
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    
        res.setHeader('Access-Control-Allow-Headers', '*');
        next();
    })
}

module.exports = corsConfig;