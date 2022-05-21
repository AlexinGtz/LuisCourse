import React from "react";
import { Post } from '../../components/Post/Post';

import mockPosts from '../../mock/posts.json'

export const Posts = () => {

    

    return (
        <div>
            {
                mockPosts.map((post) => 
                <Post   key={post.timestamp}
                        author={post.author} 
                        title={post.title} 
                        time={getTime(post.timestamp)} 
                        paragraph={post.text} />)
            }
            
        </div>
    );
}

const getTime = (timestamp) => {
    const time = new Date(parseInt(timestamp));

    return `${time.getHours()}:${time.getMinutes()}`
}