import React from 'react';

import './Post.css'

export const Post = (props) => {
    return (
        <div className='postMainDiv'>
            <div className='postHeaderDiv'>
                <h2 className='postAuthorName'>{props.author}</h2>
                <p className='postTime'>{props.time}</p>
            </div>
            <h3 className='postTitle'>{props.title}</h3>
            <p className='postParagraph'>
                {props.paragraph}
            </p>
        </div>
    );
}