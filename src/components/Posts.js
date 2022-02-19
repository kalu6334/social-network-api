import React, {useEffect, useState} from 'react';
import Post from './Post';
import Grid from '@material-ui/core/Grid';

const Posts = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [posts,setPosts] = useState(null)
  
    useEffect(() => {
        fetch('http://localhost:1337/api/posts',
        {
            method: "GET",
            headers: {
                "Accept": "Application/json"
            }
        })
        .then(res => res.json())
        .then(reponse => {
            setPosts(reponse)
            setIsLoading(false)
        })
    },[])

    console.log(posts);

    return (
        <div>
            <Grid  container direction="column"justifyContent="flex-start" alignItems="stretch">
            {isLoading? 'Loading ...': posts.data.map(post => 
                <Post data={post} key={post.id}/>
            )} 
            </Grid>        
        </div>
    );
};

export default Posts;