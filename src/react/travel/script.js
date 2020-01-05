
class Dots extends React.Component {
    //this component expected to get following props:
    //numOfDots;
    //selectedDot
    constructor(props) {
        super(props);
        this.state = {
            selectedDot: this.props.selectedDot
        }
    }
    dotSelected = (ev) => {
        const dotIndex = ev.target.getAttribute('data-index');
        this.setState({selectedDot:parseInt(dotIndex)});
    };


    render() {
        const {numOfDots,selectedDot} = this.props;

        let dots =[];

        for (let i = 0; i < numOfDots; i++) {
            let className = 'dot ';
            if(i === selectedDot) className = className + 'selected';
            dots.push(<div className={className} onClick={this.dotSelected} data-index={i}></div>);
        }
        return (
            <div>
                {dots}
            </div>
        );
    }
}


class Card extends React.Component {
    constructor(props) {
        super();
    }
    render() {

        return (
            <div>
                <Dots numOfDots={3}/>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Card/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));