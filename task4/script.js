const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];


const result = products.filter(products => ((products.photos != "") && (typeof products['photos'] != "undefined")))

const result2 = products.sort((a, b) => a.price - b.price)

console.log(products)
console.log(result)
console.log(result2)