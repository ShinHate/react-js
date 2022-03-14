import React from "react";

import {ListGroup} from "react-bootstrap";
import PostListItem from "../post-list-item";

import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
            </li>
        )
    });

    return (
        <ListGroup as="ul" className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;