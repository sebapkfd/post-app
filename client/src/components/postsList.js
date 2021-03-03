import React, {useEffect, useState} from 'react';

const PostList = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState('')

    const getPosts = async () => {
        try {
            const response = await fetch("http://localhost:5000/");
            const jsonData = await response.json();
            setPosts(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    const deletePost = async (id) => {
        try {
            const body = {id};
            const response = await fetch("http://localhost:5000/", {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
        console.log('Xdd');
    }

    const onSubmitSearch = (e) => {
        e.preventDefault()
        console.log(filter);
    }

    useEffect(() => {
        getPosts()
    }, []);

    let listToRender = (filter === '') ? posts: posts.filter(post => post.name.includes(filter));

    return (
        <div>
            <form onSubmit={onSubmitSearch}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                />
            </form>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {listToRender.map(post => (
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