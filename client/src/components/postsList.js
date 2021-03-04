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

    useEffect(() => {
        getPosts()
    }, []);

    let listToRender = (filter === '') ? posts: posts.filter(post => post.name.includes(filter));

    return (
        <div className="list">
            <div id="searchBar">
                <form>
                    <input
                        type="text"
                        name="search"
                        placeholder="Filtro de nombre"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    />
                </form>
            </div>
            <div className='tableInfo'>
                <table>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acción</th>
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
        </div>
    )     
}

export default PostList;