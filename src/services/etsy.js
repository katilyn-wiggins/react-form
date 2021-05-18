const apiKey = process.env.ETSY_API_KEY;

export const findMugs = async () => {
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/listings/active?tags=mug&limit=12&includes=Images:1&api_key=${apiKey}`
  );

  const { results } = await res.json();
  console.log(results, 'etsy');

  return results.map((mug) => ({
    id: mug.listing_id,
    title: mug.title,
    image: mug.Images.map((image) => image.url_570xN)[0],
    price: mug.price,
    link: mug.url,
  }));
};

export const findMugsByKeyword = async (keyword) => {
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/listings/active?tags=mug+${keyword}&limit=12&includes=Images:1&api_key=${apiKey}`
  );

  const { results } = await res.json();
  console.log(results, 'etsy');

  return results.map((mug) => ({
    id: mug.listing_id,
    title: mug.title,
    image: mug.Images.map((image) => image.url_570xN)[0],
    price: mug.price,
    link: mug.url,
  }));
};
