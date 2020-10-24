//las rutas sirven para controlar nuestra rest api
const express = require('express')
const router = express.Router()

const Tickets = require('../models/Tickets')

router.post('/tickets', async(req, res) => {
    try {
        const newTicket = new Tickets(req.body)
        const saveDoc = await newTicket.save()
        res.send({ 'message': 'Se ha creado un ticket', doc: saveDoc }).status(201)

    } catch (error) {
        res.send({ 'message': error}).status(400)
    }
})

router.get('/tickets/:id', async (req, res) => {
    try {
        const tickets = await Tickets
         .findById(req.params.id)
         .populate('products')
        res.json({ message: 'peticion exitosa', tickets: tickets }).status(201)
    } catch (error) {
        // res.json({ message: error.message }).status(400)
        next(error)
    }
})

module.exports = router

// {
//     products: ["5f713a305c76585eb40fb5f8", "5f714c5c8c5b3014acf920fd"]
// }