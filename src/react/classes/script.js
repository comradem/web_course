class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Factorial</h1>
                <Factorial/>
            </div>
        );
    }
}

class Factorial extends React.Component {
    render() {
        return(
            <div>factorial of 5 is: {this.calcFactorial(5)}</div>
        )
    }

    calcFactorial(num){
        if (num===1) return num;
        return this.calcFactorial(num-1)*num;
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));