const express = require("express");
const app = express();

const routes = require("./routes");
const port = process.env.PORT || 3333;

app.use(routes);
app.listen(port, () => {
    console.log(`Escutando o app na porta ${port}..`);
});