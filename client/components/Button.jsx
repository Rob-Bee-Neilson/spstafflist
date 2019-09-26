import React from 'react'

import AllStaff from './AllStaff';
import RangedStaff from './RangedStaff';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggle: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({
                toggle: !this.state.toggle
            }, () => {
                if (this.state.toggle === true) {
                    return <RangedStaff />
                }
                else {return <AllStaff />}
        });

    }

    render() {
        return (
            <React.Fragment>

                <button onClick={this.handleClick}>
                    {this.state.toggle ? 'Show all the staff' : 'Show staff in range'}
                </button>

                {this.state.toggle ? <RangedStaff /> : <AllStaff />}

            </React.Fragment>
        );
    }
}