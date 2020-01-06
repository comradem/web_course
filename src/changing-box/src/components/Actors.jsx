import React, {Component} from 'react';
import Actor from "./Actor.jsx";
import ActorObj from "../dom/ActorObj"

class Actors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialStaff : this.props.staff.map((actor,index) => <Actor key={index} data={new ActorObj(actor)}/>),
            currentStaff : this.props.staff.map((actor,index) => <Actor key={index} data={new ActorObj(actor)}/>)
        }
    }
    
    applyFilter = (event) => {
        let filtered = this.state.initialStaff.filter(item => {
            return item.props.data.getFullName().toLowerCase().includes(event.target.value.toLowerCase())
            });
        this.setState({currentStaff:filtered});

    };
    render() {
        return (
            <div className="container">
                <div>
                    <input type="text" onChange={this.applyFilter}/>
                </div>
                <div className="flex-row">
                    {this.state.currentStaff}
                </div>
            </div>
        );
    }
}

export default Actors;