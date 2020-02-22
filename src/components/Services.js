import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
state = {
    services:[
        {
            icon: <FaCocktail/>,
            title: 'Free Cocktails',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper ante et elit feugiat, eget feugiat purus sagittis.'
        },
        {
            icon: <FaHiking/>,
            title: 'Free Hiking',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper ante et elit feugiat, eget feugiat purus sagittis.'
        },
        {
            icon: <FaShuttleVan/>,
            title: 'Free Van',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper ante et elit feugiat, eget feugiat purus sagittis.'
        },
        {
            icon: <FaBeer/>,
            title: 'Free Beer',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper ante et elit feugiat, eget feugiat purus sagittis.'
        }
    ]
}
render() {
    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {this.state.services.map((item, index) => {
                    return(
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );
                })}
            </div>
        </section>

    )
}
}
