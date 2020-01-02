class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let myStyle = {display:'inline-block'};

        if (this.props.location === 'after') myStyle = {};

        return (
            <div className={this.props.type} style={myStyle}>

            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Box type='small' location='next'/>
                <Box type='medium' location='next'/>
                <Box type='large' location='next'/>
                <Box type='medium' location='next'/>
                <Box type='small' location='next'/>
                <Box type='x-large' location='after'/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));