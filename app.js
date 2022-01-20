// Import required node modules
const express = require('express');
const cors = require('cors');
const path = require('path');

// Creates app
const app = express();

// Configures app
app.set('port', process.env.PORT || 8000);

// Configures middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Configures app routes
app.use('/api/id', require(path.join(__dirname, './routes/id.routes')));

// Listen app at port
app.listen(app.get('port'), () => {
	console.log('App listening on port ' + app.get('port'));
});
