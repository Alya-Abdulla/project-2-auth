
const { application } = require('express')
const express = require('express')
const db = require('../models')
const router = express.Router()



router.get('/read',(req, res)=>{

// await db.postmessage.findOrCreate({ where: { name: req.body.name})

    res.render('page/read.ejs')
})
router.get('/write',(req, res)=>{
// await db.postmessage.create({name: req.body.name})

    res.render('page/write.ejs')
})
router.delete('/delete',(req, res)=>{

// await db.postmessage.destroy({ name: req.body.name })


    res.render('page/delete.ejs')
})

module.exports = router