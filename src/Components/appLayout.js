import React from 'react'
import Quiz from './quiz'
import QUESTION_DATA from '../JsonDataBase/QCMENTRETIEN '

import logo from '../assets/logoImex.png'

export default class appLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a; // a function to randomly return a shuffle version of an array
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img src={logo} alt='logo-Imex' width="120px" height='40px' />
                        <h1> Entretien Imex</h1>
                        <h4 style={{ color: "green" }}>Front-end</h4>
                        <p className="lead">Vous avez {QUESTION_DATA.length} questions à répondre dans une heure </p>
                        <hr />
                        <Quiz questions={this.shuffle(QUESTION_DATA)} />
                    </div>
                </div>
            </div >
        )
    }
}
