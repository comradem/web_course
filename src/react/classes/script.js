class App extends React.Component {
    render() {
        return (
            <div className="container">
                {/*<h1>Factorial</h1>*/}
                {/*<Factorial/>*/}
                <h1>Numbers</h1>
                <ShowNumbers/>
            </div>
        );
    }
}

class ShowNumbers extends React.Component {
    render() {
        return (
          <div>
              <div>{`numbers are: ${this.getNumbers(12)} `}</div>
          </div>
        );
    }
    getNumbers(num){
        return Array.from(Array(num), (elem, index)=> index+1);
    }
}

class Factorial extends React.Component {
    render() {
        return (
            <div>factorial of 5 is: {this.calcFactorial(5)}</div>
        )
    }

    calcFactorial(num) {
        if (num === 1) return num;
        return this.calcFactorial(num - 1) * num;
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));