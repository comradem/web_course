

class RangeSlider extends React.Component {
    render() {
        return (
                <label htmlFor="slider">
                    How much do you love FE?
                    <input name="slider" type="range" step='25'/>
                </label>
        )
    }
}

class FormComponent extends React.Component {
    render() {
        return (
                <label htmlFor="favorite">
                    What is Your favorite topic?
                    <input name="favorite" type="text"/>
                </label>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>How Do You Like FrontEnd?</h1>
                <RangeSlider/>
                <FormComponent/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));