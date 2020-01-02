

class Button extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.sayHelloWorld}>Say "Hello World"</button>
            </div>
        );
    }

    sayHelloWorld = () => {
        document.getElementById('title').innerText = 'Hello World!!!!';
    }
}


class Box extends React.Component {
    constructor(props) {
        super(props);
        this.color = this.props.color;
        this.title = this.props.title;
    }
    render() {
        return (
            <div className="square" style={{backgroundColor: this.props.color}}>
                <h4>{this.title}</h4>
            </div>
        )
    }
}


class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var style = {
            "fontFamily": this.props.font
        };


        return (
            <h2 style={style}>{this.props.text}</h2>
        );
    }
}

class App extends React.Component {



    render() {
        const arr = [<Box title="Red" color="red"/>,<Box title="Green" color="green"/>,<Box title="Gray" color="gray"/>,<Box title="Orange" color="orange"/>];
        return (
            <div className="container">
                {arr}
                {/*<Button/>*/}
                {/*<Title text="If I Rule the DOM" font="cursive" />*/}
                {/*<Title text="Talk is cheap. Show me the code" font="fantasy" />*/}
            </div>
        );
    }
}


ReactDOM.render(
    <div>
        <App/>
        <h1 id='title'></h1>
    </div>,
    document.getElementById('root'));