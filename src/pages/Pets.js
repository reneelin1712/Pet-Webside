import React, { Component} from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import PetsSection from '../components/PetsSection';


class Pets extends Component {
  render(){
  return (
    <>
        <Nav />
        <Header page="petsHeader">
          <Banner title="Find your Pet">
            <Link to="/" className="btn-primary">Return Home</Link>
          </Banner>
        </Header>

        <PetsSection></PetsSection>
        
    </>
  );
}
}

export default Pets;
