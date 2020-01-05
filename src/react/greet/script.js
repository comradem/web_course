
class Greet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    updateText = (event) => {
        this.setState({text:event.target.value});
    };

    showText = () => {
        this.setState({updatedText:this.state.text});
    };


    render() {
        const {text, updatedText} = this.state;
        return (
            <div>
                <label htmlFor="input">
                    <input type="text" name='input' value={text} onChange={this.updateText} />
                </label>
                <button type='button' onClick={this.showText}>Greet</button>
                <p>Hello {updatedText}</p>
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <Greet/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));

