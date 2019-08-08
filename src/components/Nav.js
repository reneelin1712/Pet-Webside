import React, { Component } from 'react';
import { FaDog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="navbar">
                    <ul className="list">
                    <Link to="/">
                            <FaDog></FaDog>
                        </Link>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li><Link to="/pets">pets </Link></li>

                    </ul>

                </div>

            </nav>
        )
    }
}