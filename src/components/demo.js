import React, { Component, PropTypes } from 'react';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "what's the fuck,man!!!",
            fuck:"fuck you"
        }
    }
    render() {
        return (
            <main>
                <p>Demo</p>
                <Child fuck={this.state.fuck} />
            </main>
        );
    }
}

Demo.propTypes = {

};

class Child extends Component {
    render() {
        return (
            <div>
                <p>{this.props.fuck}</p>
                <Child_1 {...this.props} />
            </div>

        )
    }
}

class Child_1 extends Component {
    render() {
        return (
            <p>{this.props.fuck}</p>
        )
    }
}



export default Demo;


