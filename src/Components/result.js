import React from 'react'

export default class Results extends React.Component {
    render() {
        const score = this.props.score;
        const total = this.props.total;
        const percent = score / total * 100;
        var message = 'You passed the quiz!';
        var link = <a href="/">Essayer à nouveau</a>;
        return (
            <div className="well">
                <h4>Votre score est {score} sur {total} questions.</h4>
                <hr />
                <h1>{percent}% - {percent >= 75 ? message : link}</h1>
            </div>
        );

    }
}