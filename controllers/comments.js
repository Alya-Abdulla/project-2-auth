const express = require('express')
const db = require('../models')
const router = express.Router()
// const axios = require('axios')


router.post('/:postid', async (req,res) => {
// Grab our pokemon
const po = await db.post.findByPk(req.params.postid)
// Create a comment
const [newComment, created] = await db.comments.findOrCreate({
    where: {
        comment: req.body.Des
    }
})
//Add our comment to the pokemon
await po.addComment(newComment)

// let fullComment = po.getComments()

// await res.locals.user.post.addComment(newComment)
//redirect to pokemon details page
// res.redirect(`/posts/${req.params.postid}`)
res.redirect(`/posts/read`)
})



module.exports = router