
class MyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    updateText = (event) => {
        const txt = event.target.value;
        //state is not updated immediately
        this.setState({text: txt});
        if (this.props.callback) {
            this.props.callback(txt);
        }
    };

    render() {
        return (
            <div>
                <label htmlFor="input">Select a username:
                    <input type="text" name='input' id='input' onChange={this.updateText}/>
                </label>
            </div>
        );
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    updateComponent = (txt,event) => {
        this.setState({text:txt});
    };
    render() {
        return (
            <div>
                <MyInput callback={this.updateComponent}/>
                <p>Your name is: {this.state.text}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));