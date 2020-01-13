import React from 'react'
import Results from './result'
import Scorebox from './scoreBox'
import Question from './question'


export default class Quiz extends React.Component {
    interval = 0
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            current: 1,
            launched: false,
            time: 3605000,
            timeFinished: false
        };
    }

    lauchTest = () => {
        this.setState({ launched: true })
        this.interval = setInterval(() => {
            !(this.state.time === -1000) && this.setState({ time: this.state.time - 1000 });
            (this.state.time === -1000) && clearInterval(this.interval)
        },
            1000)
    }

    handleNextCLick = (myAnswer, correctAnswer) => {
        //console.log(myAnswer, correctAnswer)
        this.setState((prevState) => ({
            current: prevState.current + 1
        })
        )
        if (myAnswer === correctAnswer) {
            this.setState({ score: this.state.score + 1 })
        }
    }

    handleBackCLick = () => {
        //console.log(myAnswer, correctAnswer)
        this.setState({ current: this.state.current - 1 })
        this.setState({ score: this.state.score - 1 })

    }


    endAppFunction = () => {
        this.setState({ timeFinished: true })
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const questions = this.props.questions;
        return (
            <div >
                {!this.state.timeFinished && this.state.launched && (this.state.current > questions.length) &&
                    <Results total={questions.length} score={this.state.score} />
                }
                {this.state.timeFinished &&
                    <Results total={questions.length} score={this.state.score} />
                }
                {this.state.launched && (this.state.current <= questions.length) &&
                    <Scorebox total={questions.length} current={this.state.current} time={this.state.time} endApp={this.endAppFunction} />
                }
                {!this.state.timeFinished && this.state.launched && (this.state.current <= questions.length) &&
                    <Question
                        question={questions[this.state.current - 1]}
                        onNextClick={(myAnswer, correctAnswer) => this.handleNextCLick(myAnswer, correctAnswer)}
                        onBackClick={this.handleBackCLick}
                        numberOfQuestion={this.state.current - 1}
                    />
                }
                {!this.state.launched &&
                    <div className="text-center" style={{ paddingTop: "200px" }}>
                        <button type="button" className="btn btn-success btn-lg" style={{ width: "200px", color: "white" }} onClick={this.lauchTest}>
                            Start
                        </button>
                    </div>
                }
            </div>
        )
    }
}


