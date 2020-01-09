import React, {Component} from 'react';
import Movie from './Movie'
import {Accordion} from "react-bootstrap";
import MovieObj from "../dom/MovieObj";

export default class Movies extends Component {

    render() {
        let obj = new MovieObj();
        obj.title = 'title';
        obj.desc= 'desc';
        obj.image = 'img';
        obj.id = 0;
        return (
            <Accordion>
                <Movie movie={obj}/>
            </Accordion>
        );
    }
}