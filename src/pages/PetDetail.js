import React, { Component } from 'react';
import StyledHeader from '../components/StyledHeader';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { PetContext } from '../context';


class PetDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug
        }
    };

    static contextType = PetContext;

    render() {
        const { getPet } = this.context;
        const pet = getPet(this.state.slug);
        console.log(pet);
        const { name, description, age, size, images } = pet;
        const [mainImg] = images;
        return (
            <>
                <StyledHeader img={mainImg}>
                    <Banner title={`${name}`}>
                        <Link to="/pets" className="btn-primary">Back To Pets</Link>
                    </Banner>

                </StyledHeader>

                <section className="pet-detail">
                    <div className="pet-detail-images">
                        {images.map((item, index) => {
                            return (<img key={index} src={item} alt={name} />)
                        })}
                    </div>

                    <div className="pet-detail-info" >
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>

                        <article className="info">
                            <h3>Info</h3>
                            <h6>age: {age}</h6>
                            <h6>Weight: {size} KG</h6>

                        </article>

                    </div>
                </section>


            </>
        );
    }
}

export default PetDetail;
