class Strategy {
    constructor() {
    }
}


class MathBox extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.strategy = props.strategy;
    }
    executeLogic = (event) => {
        let num = event.target.value;
        let ans = 0;
        document.getElementById(`${this.strategy}`).innerText = '';
        switch(this.strategy){
            case 1:
                ans = Math.pow(num,2);
                break;
            case 2:
                ans = Math.sqrt(num);
                break;
            case 3:
                let arr = Array(parseInt(num)).fill(null).map( (x,i) => i+1 );
                ans = arr.reduce((acc,curr) => acc+curr);
                break;
            case 4:
                let num1 = Math.pow(num,2);
                let tmp = Array(parseInt(num)).fill(null).map( (x,i) => i+1 );
                ans = Math.max(tmp.reduce((acc,curr) => acc+(curr+5)),num1);
        }
        document.getElementById(`${this.strategy}`).innerText += ` ${ans}`;
    };
    render() {
        return (
            <div>
                <h2>{this.title}</h2>
                <label htmlFor="input">
                    <input type="number" name="input" onChange={this.executeLogic}/>
                </label>
                <p>Result is:<span id={`${this.strategy}`}></span></p>
            </div>
        );
    }
}


class App extends React.Component {
    render() {

        const comps = [
            {
                strategy: 1,
                title:'Calculate Squared number'
            },
            {
                strategy: 2,
                title:'Calculate squared root'
            },
            {
                strategy: 3,
                title: 'Calculate sigma'
            },
            {
                strategy:4,
                title: 'calculate highest between squared and sigma'
            }
        ];

        const arr = comps.map((item) => <MathBox key={item.strategy} strategy={item.strategy} title={item.title}/>);
        return (
            <div>
                {arr}
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));
