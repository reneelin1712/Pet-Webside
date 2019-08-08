import React, { Component} from 'react';
import Box from '@material-ui/core/Box';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import About from '../components/About'
import Star from '../components/Star';


class Home extends Component {
  render(){
  return (
    <>
      <Box className="App"> 
        <Nav />
        <Header page="defaultHeader">
          <Banner title="Your Dear Friends" subtitle="Adopt the special pet ">
          <Link to="/pets" className="btn-primary" >
            Our Pets
          </Link>
          </Banner>
         
        </Header>
        <About />
        <Star />
    
    </Box>
    </>
  );
}
}

export default Home;
