
class NavBar extends React.Component {
    render() {
        return(
            <div className="navbar flex">
                <NavBarItem/>
                <NavBarItem1/>
                <NavBarItem2/>
                <NavBarItem3/>
            </div>
        );
    }
}

class NavBarItem extends React.Component {
    render(){
        return(
            <div className="navbar-item">
                <h2>services</h2>
            </div>
        );
    }
}

class NavBarItem1 extends React.Component {
    render(){
        return(
            <div className="navbar-item">
                <h2>work</h2>
            </div>
        );
    }
}
class NavBarItem2 extends React.Component {
    render(){
        return(
            <div className="navbar-item featured_text">
               <h2> the team</h2>
            </div>
        );
    }
}
class NavBarItem3 extends React.Component {
    render(){
        return(
            <div className="navbar-item icon_phone">
                <h2>icon_phone</h2>
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className="main flex">
                <Intro/>
                <div className="wrapper flex">
                    <Card/>
                    <Card/>
                    <Card/>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            </div>
        );
    }
}

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div><img src="Cover_letter_l.png" alt="should be image"/></div>
                <div><h2>Design and Branding</h2></div>
                <div><p>Interaction Design</p></div>
                <div><p>Graphic Design</p></div>
                <div><p>Identity Design</p></div>
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