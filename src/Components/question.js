import React from 'react'
import Spinner from './spinner'


export default class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [
                { "A": false },
                { "B": false },
                { "C": false },
                { "D": false },
            ],
            fetchingDone: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ fetchingDone: true })
        }, 5000)
    }


    componentDidUpdate(prevProps) {
        if (this.props.question !== prevProps.question) {
            this.setState({
                checked: [
                    { "A": false },
                    { "B": false },
                    { "C": false },
                    { "D": false },
                ]
            })
        }
    }

    handleChange = (e, id) => {
        let _checked = (this.state.checked).map(el => {
            let key = Object.keys(el)[0]
            let value = Object.values(el)[0]
            if (key === id) { value = true } else value = false
            return { [key]: value }
        })
        this.setState({
            checked: _checked
        })
    }

    render() {
        const question = this.props.question;
        if (!this.state.fetchingDone) return <Spinner />
        else return (
            <div className="well">
                <h3>{question.text}</h3>
                {question.Hint.map((hint, index) => <h5 key={index}>{hint}<br /></h5>)}
                <hr />
                <ul className="list-group">
                    {
                        question.choices.map(choice => {
                            return (
                                <li className="list-group-item" key={choice.id}>
                                    <strong> {choice.id}</strong>
                                    <div>
                                    </div>
                                    <input
                                        type="radio"
                                        onChange={(e) => this.handleChange(e, choice.id)}
                                        name={choice.id}
                                        value={choice.id}
                                        checked={Object.values(this.state.checked.filter(el => (Object.keys(el)[0] === choice.id)))[0][choice.id]}
                                    />
                                    {choice.text}
                                </li>
                            )
                        })
                    }
                </ul>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <button type="button" className="btn btn-danger"
                        onClick={() =>
                            this.props.onBackClick()
                        }
                        disabled={this.props.numberOfQuestion === 0 ? true : false}
                    >
                        Précident
                    </button>
                    <button type="button" className="btn btn-primary"
                        onClick={() =>
                            this.props.onNextClick(
                                Object.keys(this.state.checked.filter(el => (Object.values(el)[0] === true))[0])[0]
                                , question.correct
                            )
                        }
                        disabled={this.state.checked.filter(el => (Object.values(el)[0] === true)).length === 0}
                    >
                        Suivant
                    </button>
                </div>
            </div>
        )
    }
}