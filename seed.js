const mongoose = require("mongoose")

const Product = require('./models/Product')

const products =[

    {
        name:"Iphone 14pro",
        img:"https://www.cnet.com/a/img/resize/8d4d3ff24b03b8b2be0be8f53fe5534cd90b0bb0/hub/2022/09/30/44279d55-f21a-458e-bdaf-7c61c17cfc1b/iphone14vs13pro.jpg?auto=webp&fit=crop&height=1200&width=1200",
        price:132990,
        desc:"As amazing as ever.",
    },


    {
        name:"mackbook m2 pro",
        img:"https://imageio.forbes.com/specials-images/imageserve/62b322669e515ab7a37a1f0b/0x0.jpg?format=jpg&width=1200",
        price:149900,
        desc:"Supercharged by M2 pro and M2 Max"
    },


    {
        name:"Iwatch",
        img:"https://beebom.com/wp-content/uploads/2021/06/apple-watch-series-7-release-date-price-features-and-more.jpg",
        price:50900,
        desc:"Smarter. Brighter. Mightier."
    },


    {
        name:"Ipad Pro",
        // img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNL1KWfAwmYdhl9Ruhg37B7IrtRv6bwzlEg&usqp=CAU",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPJvGD1FOC-jE781XfIf4Uwv10eTCikByoA&usqp=CAU",
        price:81900,
        desc:"jAstonishing performance"
    },

    {
        name:"airpods",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5edlCDEtqb0xrT0N5CetVJTnvR33tq-oPA&usqp=CAU",
        price:999,
        desc:"A magical connection to your devices"
    },



]

async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB