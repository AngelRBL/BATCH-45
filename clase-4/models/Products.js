const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        store: {
            type: String
        },
        qnty: {
            type: Number,
            default: 25
        }
    }
}, { timestamps: true })

const Products = mongoose.model('Products', productSchema)

module.exports = Products





// {
//     "name": "Crispi Donut",
//     "price": 35,
//     "stock": {
//         "store": "Gigante",
//         "qnty": 190
//     }
// }