import React, {Component} from 'react';
import Actor from "./Actor.jsx";
import ActorObj from "../dom/ActorObj"
import '../style/actors.css'
import {InputGroup, FormControl, Container, Row} from "react-bootstrap";

class Actors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialStaff: this.props.staff.map((actor, index) => <Actor key={index} data={new ActorObj(actor)}/>),
            currentStaff: this.props.staff.map((actor, index) => <Actor key={index} data={new ActorObj(actor)}/>)
        }
    }

    applyFilter = (event) => {
        let filtered = this.state.initialStaff.filter(item => {
            return item.props.data.getFullName().toLowerCase().includes(event.target.value.toLowerCase())
        });
        this.setState({currentStaff: filtered});


    };

    render() {
        return (
            <Container>
                <Row>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Search: </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            onChange={this.applyFilter}
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Row>
                <Row>
                    {this.state.initialStaff}
                </Row>
            </Container>
        );
    }
}

export default Actors;