import React from 'react';
import PetFilter from './PetFilter';
import PetList from './PetsList';
import {  withPetConsumer } from '../context';

function PetsSection({ context }) {
    console.log(context);
    const { sortedPets, pets } = context;
                    
                    return (
                        <div>
                            <PetFilter pets={pets}></PetFilter>
                            <PetList pets={sortedPets}></PetList>
                        </div>)}

export default withPetConsumer(PetsSection)