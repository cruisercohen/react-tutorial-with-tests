import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
    render() {
        return (
            <button 
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
                {/* TODO */}
            </button>
        );
    }

}

export default Square