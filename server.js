const express = require('express');
const api_routes = require('./Develop/routes/api-routes');
const html_routes = require('./Develop/routes/html-routes');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(api_routes);
app.use(html_routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
