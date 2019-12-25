
//import List_wait from "ex2/List";
//import React, { Component } from 'react';

class List extends React.Component {
    render() {
        return (
            <div className="square">
                <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>forth</li>
                </ul>
            </div>
        );
    }
}

class Box extends React.Component {
    render() {
        return (
            <div>
                <div className="square">
                    <input type="checkbox"/>
                </div>
            </div>
        );
    }
}

class Box1 extends React.Component {
    render() {
        return (
            <div className="box1">
                <Box2/>
            </div>
        );
    }
}
class Box2 extends React.Component {
    render() {
        return (
            <div>
                <div className="box2">
                    <Box3/>
                </div>
            </div>
        );
    }
}
class Box3 extends React.Component {
    render() {
        return (
                <div className="box3">
                    <Box4/>
                    <Box4/>
                </div>
        );
    }
}
class Box4 extends React.Component {
    render() {
        return (
                <div className="box4">
                </div>
        );
    }
}

class Button extends React.Component {
    render() {
        return (
            <div className="square">
                <button type="button">Click me</button>
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
          <div>
              {/*<List/>*/}
              {/*<Box1/>*/}
              <Button/>
          </div>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root'));