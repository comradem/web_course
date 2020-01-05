class MyComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };

        this.updateInput = this.updateInput.bind(this);
        this.showName = this.showName.bind(this);

    }
    updateInput = (event) => {
        this.setState({ name: event.target.value });
    };

    showName = () => {
        this.setState({ myChangeHandler:this.state.name });
        // alert(newName);
        // alert(this.state.newName);
    };

    render() {
        const {name, myChangeHandler} = this.state;

        return (
            <div>
                <input type="text" name="input" placeholder="Enter your name" 
                onChange={this.updateInput} />
                <button onClick={this.showName}>Greet</button>
                <div>Hello {myChangeHandler}</div>
            </div>
        )
    }
}


class App extends React.Component {

    render() {
        return (
            <div>
                <MyComp />
            </div>
        )
    }

}



ReactDOM.render(<App />,
    document.getElementById("root")
);