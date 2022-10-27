
const { Router } = require('express')
const express = require('express')

const db = require('../models')
const router = express.Router()



router.get('/read', async (req, res)=>{

// await db.postmessage.findOrCreate({ where: { name: req.body.name})

    const posts = await db.post.findAll()

    res.render('page/read.ejs', {posts})
})
router.get('/form',(req, res)=>{
// await db.postmessage.create({name: req.body.name})

    res.render('page/form.ejs')
})


router.post("/form", async(req,res)=>{
const {title, Description} = req.body

const user = await db.user.findByPk(res.locals.user.id)
    if (user) {
        await db.post.findOrCreate({ 
            where:  {
                // img: req.body.img
                 title: req.body.title,
                 message: req.body.message,
                 creater: user.email
                }
            })
            res.redirect('/posts/read')
    } else {
        res.send('please log in to add a comment')
    }
})






router.get('/form',(req, res)=>{
// await db.postmessage.create({name: req.body.name})

res.render('page/form.ejs')
  })

router.delete('/:D',(req, res)=>{

// await db.postmessage.destroy({ name: req.body.name })


    // res.render('page/delete.ejs')
})


module.exports = router