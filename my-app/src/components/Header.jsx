import React from 'react';

import Menu from './Menu';

class Header extends React.Component {
    
    render() {
        return(
            <div className="header-container">
                <span className="name">Ian Yin</span>
                <span>Web Developer</span>
                <Menu />
            </div>
            
        )
    }
}

export default Header;

