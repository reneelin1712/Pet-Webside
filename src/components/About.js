import React, { Component } from 'react';
import { FaPaw,FaNotesMedical,FaAngellist} from 'react-icons/fa';
import Title from '../components/Title';

export default class Service extends Component {
    state = {
        services: [
            {
                icon:<FaPaw/>,
                title:"Adoption",
                info:"We have a lifetime backup policy and your adopted dog may be returned to us at any stage. Sometimes life throws you a curveball and we're always here to help."
            },
            {
                icon:<FaNotesMedical/>,
                title:"HealthCare",
                info:"provides modern, professional and affordable health care for your pets. We aim to make your pet feel at ease in our clinic with a caring and gentle approach to treatment and consultations."
            },
            {
                icon:<FaAngellist/>,
                title:"Event",
                info:"The variety of pet events you can host is endless. For example, you can plan a casual outdoor get together, or pull out all the stops to host an extravagant shindig full of paw-zazz. "
            }
        ]
    }
    render() {
        return(
            <section className="services">
            <Title title="About Us"/>
            <div className="services-center">
                {this.state.services.map((item,key)=>{
                    return<article key={key} className="service">
                        <span>{item.icon}</span>
                        <h4>{item.title}</h4>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
            </section>
        )
      
            
    }
}