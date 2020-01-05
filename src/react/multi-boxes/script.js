
class Boxes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: []
        }
    }

    render() {
        const {colors} = this.props;
        const arr = colors.map(elem => <div className='box' style={{backgroundColor:elem}}></div>);
        console.log(arr);
        return (
            <div>
                {arr}
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        const arr = ['green','red','gray','black','pink'];
        return (
            <Boxes colors={arr}/>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));