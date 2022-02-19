import React from 'react';

const Post = ({data}) => {
    return (
        <div>
            <h4>{data.id} {data.attributes.tweet}</h4>
            
        </div>
    );
};

export default Post;