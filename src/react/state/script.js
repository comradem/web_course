

class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled : false
        };
    }

    toggleBtn = (event) => {
        this.setState({isEnabled: !this.state.isEnabled});
        if (!this.state.isEnabled){
            event.target.className = `${event.target.className.split(" ")[0]} grayed-out`;
        }else {
            event.target.className = `framed_square ${this.props.color}`;
        }
    };

    render() {
        return (
            <div className={`framed_square ${this.props.color}`} onClick={this.toggleBtn}>{this.props.color}</div>
        );
    }
}


class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Which color do you want?</h1>
                <h3>(disable the one you dont want with a click)</h3>
                <MyButton color={'green'}/>
                <MyButton color={'pink'}/>
                <MyButton color={'purple'}/>
                <MyButton color={'gray'}/>
                <MyButton color={'red'}/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));
