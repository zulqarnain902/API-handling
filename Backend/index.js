import express from "express";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json())

app.get('/api/products', (req, res) => {
    const products = [ 
        {
            id: 1,
            name: 'table wooden',
            price: 200,
            image: '/Api_Handling/Backend/WhatsApp Image 2024-07-27 at 08.09.04_84e14171.jpg',
        },
        {
           id: 1,
            name: 'table wooden',
            price: 200,
            image: '/Api_Handling/Backend/WhatsApp Image 2024-07-27 at 08.09.04_84e14171.jpg',  
        },
        {
             id: 1,
            name: 'table wooden',
            price: 200,
            image: '/Api_Handling/Backend/WhatsApp Image 2024-07-27 at 08.09.04_84e14171.jpg', 
        },
        {
              id: 1,
            name: 'table wooden',
            price: 200,
            image: '/Api_Handling/Backend/WhatsApp Image 2024-07-27 at 08.09.04_84e14171.jpg',  
        },
        {
              id: 1,
            name: 'table wooden',
            price: 200,
            image: '/Api_Handling/Backend/WhatsApp Image 2024-07-27 at 08.09.04_84e14171.jpg', 
        }
    ];

    // localhost:3000/api/products?search=metal
    if (req.query.search) {
        const filterProducts = products.filter(product => 
            product.name.toLowerCase().includes(req.query.search.toLowerCase())
        );
        return res.send(filterProducts);
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
