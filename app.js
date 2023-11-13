const express = require('express');
const app = express();
const allRoutes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3500;

app.set('port', PORT);

app.use(express.json())
app.use(allRoutes);

app.listen(app.get('port'), () => {
    console.log('Server running on port ' + app.get('port') + '!!!');
})