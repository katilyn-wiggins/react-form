require('dotenv').config();

const apiKey = process.env.ETSY_API_KEY

export const findMugs = async () => {
    const res = await fetch( 
        `https://openapi.etsy.com/v2/listings/active?tags=mug&limit=12&includes=Images:1&api_key=${apiKey}`
    );

    const { results } = await res.json(); 

    return results.map((mug) => ({
        id: mug.listing_id,
        title: mug.title, 
        image: mug.images.map((image) => ({
            url: image.url_570xN 
        })),
        price: mug.price, 
        link: mug.url 
    }))
}; 