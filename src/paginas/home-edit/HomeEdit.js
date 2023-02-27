// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import CommentList from './CommentList';

// const CommentForm = () => {
//   const [name, setName] = useState('');
//   const [comment, setComment] = useState('');
//   const [photoUrl, setPhotoUrl] = useState('');
//   const [comments, setComments] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newComment = {
//       foto: name,
//       comentario: comment,
//       foto: photoUrl
//     };
//     setComments([...comments, newComment]);
//     setName('');
//     setComment('');
//     setPhotoUrl('');
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formName">
//           <Form.Label>Nome:</Form.Label>
//           <Form.Control type="text" placeholder="Digite seu nome" value={name} onChange={(event) => setName(event.target.value)} />
//         </Form.Group>

//         <Form.Group controlId="formComment">
//           <Form.Label>Comentário:</Form.Label>
//           <Form.Control as="textarea" placeholder="Digite seu comentário" value={comment} onChange={(event) => setComment(event.target.value)} />
//         </Form.Group>

//         <Form.Group controlId="formPhotoUrl">
//           <Form.Label>Foto:</Form.Label>
//           <Form.Control type="text" placeholder="Digite a URL da foto" value={photoUrl} onChange={(event) => setPhotoUrl(event.target.value)} />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Enviar Comentário
//         </Button>
//       </Form>
//         <br/>
//       <CommentList comments={comments} />
//     </>
//   );
// };

// export default CommentForm;



import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormularioComentario() {
  const [comentarios, setComentarios] = useState([]);
  const [comentario, setComentario] = useState({ nome: '', comentario: '', foto: '' });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/swagger#/Usuario');
        const data = await response.json();
        setComentarios(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleChange = (event) => {
    setComentario({ ...comentario, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/swagger#/Usuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comentario),
      });
      const data = await response.json();
      console.log(data);
      setComentarios([...comentarios, data]);
      setComentario({ nome: '', comentario: '', foto: '' });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/swagger#/Usuario${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data);
      const newComentarios = comentarios.filter((comentario) => comentario.id !== id);
      setComentarios(newComentarios);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/swagger#/Usuario${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comentario),
      });
      const data = await response.json();
      console.log(data);
      const index = comentarios.findIndex((comentario) => comentario.id === id);
      const newComentarios = [...comentarios];
      newComentarios[index] = data;
      setComentarios(newComentarios);
      setComentario({ nome: '', comentario: '', foto: '' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={comentario.nome}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comentario">Comentário:</label>
          <textarea
            className="form-control"
            id="comentario"
            name="comentario"
            value={comentario.comentario}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="foto">Foto:</label>
          <input
            type="text"
            placeholder='URL DA FOTO'
            className="form-control"
            id="foto"
            name="foto"
            value={comentario.foto}
            onChange={handleChange}
          />
        </div>
        <button type="submit"
            className="btn btn-primary mr-2"
            >
              Enviar
            </button>
          </form>

          <hr />

          <h2>Comentários</h2>
          <ul className="list-group">
            {comentarios.map((comentario) => (
              <li key={comentario.id} className="list-group-item">
                <p><strong>{comentario.nome}</strong></p>
                <p>{comentario.comentario}</p>
                <img src={comentario.foto} alt="Foto do usuário" width="100" height="100" />
                <button type="button" className="btn btn-danger mr-2" onClick={() => handleDelete(comentario.id)}>
                  Excluir
                </button>
                <button type="button" className="btn btn-warning mr-2" onClick={() => handleEdit(comentario.id)}>
                  Editar
                </button>
              </li>
            ))}
          </ul>
        </div>
);
}

export default FormularioComentario;        
  
  
