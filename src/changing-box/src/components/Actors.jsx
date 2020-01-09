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
            filterText: ''
        }
    }

    applyFilter = (event) => {
        this.setState({filterText: event.target.value});
    };

    render() {
        let filtered = this.state.initialStaff.filter(item => {
            return item.props.data.getFullName().toLowerCase().includes(this.state.filterText.toLowerCase())
        });

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
                    {filtered}
                </Row>
            </Container>
        );
    }
}

export default Actors;