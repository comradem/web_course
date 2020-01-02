class NavBar extends React.Component {

    render() {
        const arr = [<NavBarItem key='0' bgImage='avatar.png'/>, <NavBarItem key='1' bgImage='share.png'/>,
            <NavBarItem key='2' bgImage='chat.png'/>];
        return (
            <div className='container'>
                {arr}
            </div>
        );
    }
}


class NavBarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            count: Math.floor((Math.random() * 10) % 10)
        }
    }

    clearCount = () => {
        this.setState({count: 0});
    };

    render() {
        let hide = 'hidden';
        if (this.props.bgImage === 'chat.png' && this.state.count !== 0) {
            hide = ''
        }

        return (
            <div className='icon_wrapper' onClick={this.clearCount}>
                <img src={this.props.bgImage} alt="icon"/>
                <span className={`badge badge-pill badge-danger ${hide}`}>{this.state.count}</span>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));