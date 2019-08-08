import React, { Component } from 'react';
import items from './data';

const PetContext = React.createContext();

class PetProvider extends Component {
    state={
        pets:[],
        sortedPets:[],
        stars:[],
        type: 'all',
        age:0,
        minSize:0,
        maxSize:0
    }

    componentDidMount() {
        let pets = this.formateData(items);
        console.log(pets);
       
        let stars = pets.filter(pet => pet.star===true);
        let maxSize = Math.max(...pets.map(item => 
            item.size));

        this.setState(
            {
                pets,
                stars:stars,
                sortedPets:pets,
                maxSize
            }

        )
    }

    formateData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let pet = {...item.fields,images,id};
            return pet;
        });
        return tempItems;
    }

    getPet = (slug) =>{
        console.log(this.state.pets);
        let tempPets = [...this.state.pets];
        let pet = tempPets.find(pet => pet.slug===slug);
        return pet;
    };
  

    handleChange = event =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked:target.value;
        const type = event.target.type;
        const name = event.target.name;
        console.log(type,name,value);
        this.setState({
            [name]:value
        },this.filterPets)

    }

    filterPets = () => {
        let {pets,type,age,minSize,maxSize} = this.state;
        console.log(type);
        let tempPets = [...pets];
        console.log(tempPets);
        age = parseInt(age)
        if(type !== 'all') {
            tempPets = tempPets.filter(pet => pet.type === type)
            console.log(tempPets);
        };

        if(age!==1) {
            tempPets = tempPets.filter(pet => pet.age >= age)
        };

        tempPets = tempPets.filter(pet => pet.size >=minSize && pet.size<= maxSize)

        this.setState({
            sortedPets : tempPets
        })
        console.log(this.state.sortedPets)

    }

    render() {
        return (
        <PetContext.Provider 
        value={{...this.state, 
        getPet:this.getPet,
        handleChange:this.handleChange}}>
        {this.props.children}
    </PetContext.Provider>
        );
    }
}

const PetConsumer = PetContext.Consumer;

export function withPetConsumer(Component) {
    return function ConsumerWrapper(props){
        return <PetConsumer>
            {value => <Component {...props} context={value} />}
        </PetConsumer>

    }
}

export{PetProvider,PetConsumer,PetContext};