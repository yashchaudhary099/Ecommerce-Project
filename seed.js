const mongoose = require("mongoose")

const Product = require('./models/Product')

const products =[

    {
        name:"Iphone 14pro",
        img:"https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-14-pro-silver-back.png?v=35",
        price:130000,
        desc:"very Expensive",
    },


    {
        name:"mackbook m2 pro",
        img:"https://www.cnet.com/a/img/resize/2f8e0df92838e18e47b7f808847d6e596a2d5d12/hub/2022/06/17/98f2e0c4-05f2-4c8e-9b61-4a9a3bdfb0aa/apple-macbook-pro-m2-laptop-2022-0557.jpg?auto=webp&width=1200",
        price:250000,
        desc:"too much expensive"
    },


    {
        name:"Iwatch",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNL1KWfAwmYdhl9Ruhg37B7IrtRv6bwzlEg&usqp=CAU",
        price:50000,
        desc:"affordable"
    },


    {
        name:"Ipad Pro",
        // img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNL1KWfAwmYdhl9Ruhg37B7IrtRv6bwzlEg&usqp=CAU",
        img:"https://m.media-amazon.com/images/I/6196Bac-mhL._AC_UF350,350_QL80_.jpg",
        price:237900,
        desc:"just for Show"
    },

    {
        name:"airpods",
        img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1632861342000",
        price:25000,
        desc:"earn and get it"
    },



]

async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB