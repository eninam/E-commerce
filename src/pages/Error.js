import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Error extends Component {
    render() {
        return (
            <section className='error-page section'>
                <div className="error-container">
                    <h1>oops! its a dead end</h1>
                    <Link to="/" className="btn btn-primary"> back home</Link>
                </div>
            </section>
        );
    }
}

export default Error;