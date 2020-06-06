const express = require('express')
require('express-group-routes')
const app = express()
const bodyParser = require ('body-parser')
const port = 3000

app.use(bodyParser.json())

const DatapegawaiController = require ('./Controller/datapegawai');

app.group('/api', (router)=> {
    router.get('/pegawai',DatapegawaiController.datapegawai)
    router.post('/pegawai',DatapegawaiController.addpegawai)
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))