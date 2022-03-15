import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
    return (
        <>
            <div className='cards-container'>
                <div className="card">
                    <FontAwesomeIcon icon="fa-brands fa-html5" />
                    <p>HTML</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
                    <p>CSS</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon="fa-brands fa-js" />
                    <p>Javascript</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon="fa-brands fa-python" />
                    <p>Python</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon="fa-brands fa-bootstrap" />
                    <p>BootstrapL</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon="fa-brands fa-node-js" />
                    <p>Django</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon="fa-brands fa-git-square" />
                    <p>MongoDB</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon="fa-brands fa-html5" />
                    <p>NodeJS</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon="fa-brands fa-html5" />
                    <p>Git</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon="fa-brands fa-html5" />
                    <p>React</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon="fa-brands fa-html5" />
                    <p>Express.js</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon="fa-brands fa-html5" />
                    <p>Postgres</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon="fa-brands fa-html5" />
                    <p>MySQL</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon="fa-brands fa-html5" />
                    <p>SQLite</p>
                </div>
            </div>
        </>
    );
}
export default Skills;