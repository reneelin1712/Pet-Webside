import React from 'react';
import Pet from '../pages/Pet';

export default function PetList({pets}) {
    console.log(pets);
    if(pets.length === 0){
        return(
        <div className="empty-search">
            <h3>No pets matched</h3>
        </div>
        )
     }
    console.log(pets);
    return <section className="petlist">
            <div className="petlist-center">
                {
                    pets.map(item => {
                        return <Pet key={item.id} pet={item}/>
                    })
                }
            </div>
        </section>
    
}