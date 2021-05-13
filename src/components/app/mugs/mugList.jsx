import React from 'react'; 
import PropTypes from 'prop-types';
import Mug from './mug';
import './index.css'

const MugList = ({ mugs }) => (
    <ul aria-label="mugs">
    {mugs.map((mug) => {
        console.log(mug.image, 'mug image'); 
        return (<li key={mug.id}> 
            <Mug
                title={mug.title}
                image={mug.image}
                price={mug.price}
                link={mug.link}
            />
        </li>)
    }
        
    )}
    </ul>
);
MugList.propTypes =  {
    mugs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        })
    ).isRequired,
}

export default MugList;