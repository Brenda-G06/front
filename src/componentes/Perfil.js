import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './perfil.module.css';

function PerfilPage() {
    const [user, setUser] = useState({
        nome: '',
        email: '',
        data_nascimento: '',
        localizacao: '',
        telefone: ''
    });
    const [editing, setEditing] = useState(false);

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        data_nascimento: '',
        localizacao: '',
        telefone: ''
    });

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if (token) {
            axios.get('https://api-me-days.vercel.app/usuarios/profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                setUser(response.data);
                setFormData(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar o perfil do usuário:', error.response || error.message);
            });
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        const token = localStorage.getItem('authToken');

        axios.put('https://api-me-days.vercel.app/usuarios/profile', formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log('Perfil atualizado:', response.data);
            setUser(formData);
            setEditing(false);
        })
        .catch(error => {
            console.error('Erro ao atualizar o perfil:', error.response || error.message);
        });
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Perfil do Usuário</h2>
            {editing ? (
    <div className="input-container">
        <input
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Nome"
            className="input-field"
        />
        <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="input-field"
        />
        <input
            name="data_nascimento"
            value={formData.data_nascimento}
            onChange={handleInputChange}
            placeholder="Data de Nascimento"
            className="input-field"
        />
        <input
            name="localizacao"
            value={formData.localizacao}
            onChange={handleInputChange}
            placeholder="Localização"
            className="input-field"
        />
        <input
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            placeholder="Telefone"
            className="input-field"
        />
        <button onClick={handleSave} className="button">Salvar</button>
    </div>
) : (
    <div>
        <p><strong>Nome:</strong> {user.nome}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Data de Nascimento:</strong> {user.data_nascimento}</p>
        <p><strong>Localização:</strong> {user.localizacao}</p>
        <p><strong>Telefone:</strong> {user.telefone}</p>
        <button onClick={() => setEditing(true)} className="button">Editar Perfil</button>
    </div>
)}
        </div>
    );
}

export default PerfilPage;
