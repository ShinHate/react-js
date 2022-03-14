import React, {Component} from "react";

import { Button } from 'react-bootstrap';
import './post-status-filter.css';

export default class PostStatusFilter extends Component{
    state = {
        buttons: [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'},
        ]
    }

    render() {
        const {filter, onFilterSelect} = this.props;

        const buttons = this.state.buttons.map(({name, label}) => {
            const active = filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    key={name}
                    type="button"
                    className={`btn ${clazz}`}
                    onClick={() => onFilterSelect(name)}
                >{label}</button>
            )
        });

        return(
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
