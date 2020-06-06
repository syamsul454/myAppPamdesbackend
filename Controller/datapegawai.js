const models = require('../models')
const customers = models.User
module.exports = {
    datapegawai: (req, res) => {
        console.log(customers.findAll())
        res.status(200).json({
            'name' : 'syamsul',
            'age' : 25
        })
    },

    addpegawai: (req, res) =>{
        customers.create(
           req.body
       ). then((user)=>{
           res.status(200).json({
               message : 'success'
           })
       }).catch((err)=>{
           res.status(500).json({
               message : err.message
           })
       })
    }

}