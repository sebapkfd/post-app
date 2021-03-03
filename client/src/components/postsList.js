import React, {useEffect, useState} from 'react';

const PostList = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const response = await fetch("http://localhost:5000/");
            const jsonData = await response.json();
            setPosts(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const deletePost = async (e) => {
        console.log('Xdd');
    }

    useEffect(() => {
        getPosts()
        .then(()=> console.log(posts))
    }, []);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {posts.map(post => (
                    <tr key={post.id}>
                        <td>{post.name}</td>
                        <td>{post.description}</td>
                        <td>
                            <button onClick={() => deletePost(post.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )     
}

export default PostList;