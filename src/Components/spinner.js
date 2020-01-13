import React from 'react'
import './spinner.css'

export default class SpinnerLoading extends React.Component {


    render() {
        return (
                <div className="row cf">
                    <div className="three col">
                        <div className="loader" id="loader-6">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                )
            }
}