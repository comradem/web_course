class ColorSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ''
        };
    };


    updateColor = (event) => {
        this.setState({color:event.target.value})
    };


    render() {
        let shirts = [<option value="red">red</option>, <option value="blue">blue</option>,
            <option value="black">black</option>];
        let dresses = [<option value="green">green</option>, <option value="orange">orange</option>,
            <option value="gray">gray</option>];
        let arr = this.props.clothType === 'shirt' ? shirts : dresses;
        let style = {color: this.state.color};

        return (
            <div className='container'>
                <select name="colors" id="colors" onChange={this.updateColor}>
                    {arr}
                </select>
                <br/>
                <div>Color of your {this.props.clothType} should be <span style={style}>{this.state.color}</span></div>
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <ColorSelector clothType='dress'/>
                <ColorSelector clothType='shirt'/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));