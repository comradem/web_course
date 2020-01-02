




function render() {
    let data = {
        linkAddress: "https://www.google.com/",
        linkText: "google",
        min: -5,
        max: 5,
        color: "maroon",
        "font-weight": "bold",
        buttonText: "click me"
    };
    ReactDOM.render(
        <div>
            <div><a href={data.linkAddress}>go to {data.linkText}</a></div>
            <div><label htmlFor="range">choose range
                <input type="range" min={data.min} max={data.max} step='1'/>
            </label></div>
            <div>
                <button type='button' style={data}>Click me</button>
            </div>
        </div>,
        document.getElementById('root'));

}



render();
