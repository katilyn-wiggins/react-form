import React from 'react';
import PropTypes from  'prop-types'; 

const Mug = ({ title, image, price, link }) => (
    console.log(image, 'mug'),
    <div> 
        <div><img src={image} alt={title} /></div>
        <em>{title}</em>
        <div>{price}</div>
        <a href={link}>Buy Here!</a>
    </div>
);

Mug.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default Mug; 