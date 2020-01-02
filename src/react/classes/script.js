class App extends React.Component {
    render() {
        return (
            <div className="container">
                {/*<h1>Factorial</h1>*/}
                {/*<Factorial/>*/}
                {/*<h1>Numbers</h1>*/}
                {/*<ShowNumbers/>*/}
                <h1>Win or Loose</h1>
                <WinOrLoose/>
            </div>
        );
    }
}

class WinOrLoose extends React.Component {
    render() {
        let rand = Math.floor(Math.random()*10)+1;
        return(
            <div>
                {rand > 5 ? <h1>You won with number: {rand}</h1> : <h3>You lost with number: {rand}</h3>}
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