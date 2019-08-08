import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function Pet({pet}) {
  console.log(pet)
  const {name, slug, images,type} = pet;
  return (
    <>
      <article className="pet">
      <div className="img-container">

      <img src={images[0]} alt={name} />
      <div className="type-top">
        <h5>{type}</h5>
        </div>
        <Link to={`/pet/${slug}`} className="btn-primary pet-link">Details </Link>
        <div className="pet-info">{name}</div>
        </div>
        
      </article>
        
    </>
  );
}


export default Pet;

Pet.propTypes = {
  pet:PropTypes.shape({
      name:PropTypes.string.isRequired,
      slug:PropTypes.string.isRequired,
      images:PropTypes.arrayOf(PropTypes.string).isRequired,
      age:PropTypes.number.isRequired,
  })
}
