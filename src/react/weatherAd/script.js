
class WeatherDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherType: Math.random() > 0.5 ? 'sunny' : 'rainy'
        }
    }

    render() {
        const showAd = this.state.weatherType === 'rainy' ? 'Do not let the rain get you! Use umbrella!!!' : '';

        return (
            <div>
                <h1>The weather is: {this.state.weatherType}</h1>
                <h2>F5 to refresh</h2>
                <p>{showAd}</p>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <WeatherDisplay/>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));