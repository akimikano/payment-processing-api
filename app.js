const express = require('express');
const routes = require('./src/infrastructure/webserver/routes/index.js');
const {TerminalModel} = require('./src/infrastructure/database/index.js');
const terminalRepository = require("./src/infrastructure/database/repositories/terminalRepository");


const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

routes(app, express);

app.listen(port, async () => {
    // const jane = await TerminalModel.create({password_hash: "salam"}).then(() => {
    //     console.log("created")
    // });
    console.log(typeof TerminalModel.findAll)

    const j = terminalRepository(TerminalModel);
    const a = await j.findAll();
    console.log(JSON.stringify(a, null, 2));
    console.log(`Example app listening on port ${port}`)
})

// export default app;
