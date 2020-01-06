
class Clock extends React.Component {
    //props none
    //state:
    // now -- date object contaning current date
    constructor(props) {
        super(props);
        this.state = {
            now: new Date(),
            isVisible: true
        };
    }



    componentDidMount(){
        this.intervalRef = setInterval(()=>
        {
            this.setState({now: new Date()})
        },1000);

    }

    componentWillUnmount(){

    }

    render() {
        const now = this.state.now;
        return (
            <div>
                <h2>this time is: {now.toLocaleTimeString()}</h2>
            </div>
        );
    }
}



class App extends React.Component {
    render() {
        return (
            <div>
                {this.state.isVisible ? <Clock/>: ''}
                <button onClick={this}>Remove clock</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));

