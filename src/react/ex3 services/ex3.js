const cards = [
    {
        src: "Cover_letter_l.png",
        title: 'Design and Branding',
        paragraphs: {
            line1: 'Interaction Design',
            line2: 'Graphic Design',
            line3: 'Identity Design'
        }
    },
    {
        src: 'pencil.png',
        title: 'Concept And Ideas',
        paragraphs: {
            line1: 'Conceptualization',
            line2: 'Digital Branding',
            line3: 'Product Strategy'
        }
    },
    {
        src: 'browser.png',
        title: 'User Interfaces Design',
        paragraphs: {
            line1: 'Wireframing',
            line2: 'Prototyping',
            line3: 'Usability Testing'
        }
    }
];

class NavBar extends React.Component {
    render() {
        const menuTitles = [
            {
                title: "services",
                className: 'navbar-item'
            },
            {
                title: "work",
                className: 'navbar-item'
            },
            {
                title: "the team",
                className: 'navbar-item'
            },
            {
                title: "icon_phone",
                className: 'navbar-item icon_phone'
            }
        ];

        const arr = menuTitles.map((item, index) => <NavBarItem key={index} item={item}/>);

        return (
            <div className="navbar flex">
                {arr}
            </div>
        );
    }
}

class NavBarItem extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.item.title;
        this.className = props.item.className;
    }

    handleHoverOn = (event) => {
        let elem = event.target;
        elem.className += ' decorator';

    };

    handleHoverOff = (event) => {
        let elem = event.target;
        elem.className = elem.className.substring(0, elem.className.lastIndexOf(" "));
    };

    render() {


        return (
            <div className={this.className} onMouseDown={this.handleHoverOn} onMouseUp={this.handleHoverOff}>
                <h2>{this.title}</h2>
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        const arr = cards.map((item, index) => <Card key={index} card={item}/>);
        return (
            <div className="main flex">
                <Intro/>
                <div className="wrapper flex">
                    {arr}
                </div>
            </div>
        );
    }
}

class Intro extends React.Component {
    render() {
        return (
            <div className="intro flex">
                <h1>services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut.</p>
            </div>
        );
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.card = props.card;
        this.src = props.card.src;
        this.titile = props.card.title;
        this.paragraphs = props.card.paragraphs;
    }

    handleHover = (event) => {
        let elem = event.target;
        elem.className += ' fading-border';
    };

    handleHoverOff = (event) => {
        let elem = event.target;
        elem.className = elem.className.substring(0, elem.className.lastIndexOf(" "));
    };

    render() {
        return (
            <div className="card">
                <div><img src={this.card.src} alt="should be image"/></div>
                <div onMouseOver={this.handleHover} onMouseLeave={this.handleHoverOff}><h2>{this.titile}</h2></div>
                <div><p>{this.paragraphs.line1}</p></div>
                <div><p>{this.paragraphs.line2}</p></div>
                <div><p>{this.paragraphs.line3}</p></div>
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <NavBar/>
                <Main/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));