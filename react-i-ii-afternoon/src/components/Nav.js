import React from 'react';

export default function Nav(){
    return <div>
        <nav className="headerContainer"></nav>
        <nav className="middleContainer"></nav>
        <nav className="navigationContainer">
            <span>
                <ul>
                    <li>Previous</li>
                    <li>Next</li>
                </ul>
            </span>
        </nav>
    </div>
}