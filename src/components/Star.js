import React, { Component} from 'react';
import {PetContext} from '../context';
import Title from './Title';
import Pet from '../pages/Pet';

class Star extends Component {
    static contextType = PetContext;
  render(){
      let { stars} = this.context;
      console.log(stars);
      stars = stars.map(pet=>{
        return <Pet key={pet.id} pet={pet} />
      }
      )
  return (
    <>
<section className="stars">
    <Title title="Star Pets" />
    <div className="stars-center">
      {stars}
    </div>
    </section>
    </>
  );
}
}

export default Star;
