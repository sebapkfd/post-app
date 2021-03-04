import React, { useState } from 'react';

const Input = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {name, description}
            const response = await fetch('http://localhost:5000/', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="input">
            <form onSubmit={onSubmitForm} id="newPost">
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Descripción"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button id="createBtn">Crear</button>
            </form>
        </div>
    )
}

export default Input;