const express = require('express');
// const api_routes = require('./Develop/routes/api-routes');
// const html_routes = require('./Develop/routes/html-routes');
// const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(api_routes);
// app.use(html_routes);

app.use(express.static('public'));

app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);
