import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" 
                    exact="true" 
                    activeclassname="nav-active">
                        <li>accueil</li>
                </NavLink>

                <li className="nav-portfolio"> portfolio
                    <ul className="nav-projects">
                        <NavLink to="project-1"
                            activeclassname="nav-active"
                            className="hover">
                                <li>projet 1</li>
                        </NavLink>
                        <NavLink to="project-2"
                            activeclassname="nav-active"
                            className="hover">
                                <li>projet 2</li>
                        </NavLink>
                        <NavLink to="project-3"
                            activeclassname="nav-active"
                            className="hover">
                                <li>projet 3</li>
                        </NavLink>
                        <NavLink to="project-4"
                            activeclassname="nav-active"
                            className="hover">
                                <li>projet 4</li>
                        </NavLink>
                    </ul>
                </li>

                <NavLink to="/contact" 
                    exact="true" 
                    activeclassname="nav-active">
                        <li>contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;