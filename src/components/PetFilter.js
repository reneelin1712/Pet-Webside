import React from 'react';
import { useContext } from 'react';
import { PetContext } from '../context';
import Title from '../components/Title';

const gettypes = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function PetFilter({ pets }) {
    const context = useContext(PetContext);
    const {
        handleChange,
        type,
        age,
        minSize, 
        maxSize
    } = context;

    let types = gettypes(pets, 'type');
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let ages = gettypes(pets, 'age');
    ages = ages.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">

            <Title title="search pets" className="title"/>
            <form className="filter-form">
                {}
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange} >
                        {types}
                    </select>

                </div>

                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <select name="age" id="capacity" value={age} className="form-control" onChange={handleChange} >
                        {ages}
                    </select>

                </div>


                <div className="form-group">
                    <label htmlFor="size">Weight KG</label>
                    <input type="number" name="minSize" id="size" value={minSize}
                        onChange={handleChange} className="size-input" />

                    <input type="number" name="maxSize" id="size" value={maxSize}
                        onChange={handleChange} className="size-input" />
                </div>

            </form>
        </section>
    )
}