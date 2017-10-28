import React from 'react';
import { NavLink } from 'react-router-dom';

const CoreLayout = ({ children }) => (
    <div>
        <header className="mdc-toolbar">
            <div className="mdc-toolbar__row">
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                    <span className="mdc-toolbar__title">New York Tech</span>
                </section>
                <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                    <nav className="mdc-tab-bar">
                        <NavLink exact to='/' className="mdc-tab">Home</NavLink>
                        <NavLink exact to='/companies' className="mdc-tab">Companies</NavLink>
                        <NavLink to='/newcompany' className="mdc-tab">New Company</NavLink>
                    </nav>
                </section>
            </div>
        </header>
        <div>{children}</div>
    </div>
);

export default CoreLayout;