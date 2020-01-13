import React from 'react'

export default class Scorebox extends React.Component {
    msToTime = (s) => {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
        return (hrs).toString().padStart(2, "0") + ':' + mins.toString().padStart(2, "0") + ':' + secs.toString().padStart(2, "0");
    }
    shouldComponentUpdate() {
        if (this.props.time > 0) return true
        else return false
    }
    componentDidUpdate() {
        if (this.props.time === 0) { this.props.endApp() }
    }

    render() {
        const { time } = this.props
        return (
            <div className="well">
                Question {this.props.current} / {this.props.total}
                <span className="pull-right"><strong>Time: {this.msToTime(time)}</strong></span>
            </div>
        )
    }
}