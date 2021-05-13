import React from 'react';
import PropTypes from  'prop-types'; 

const Article = ({ name, image, text }) => (
    <figure> 
        <img src={image} alt={name} /> 
        <figcaption>
            {text} - article written by {name} 
        </figcaption>
    </figure>
);

Aricle.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Article; 