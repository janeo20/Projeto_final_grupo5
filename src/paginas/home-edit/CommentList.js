import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const CommentList = ({ comments }) => {
  return (
    <Card>
      <Card.Header>Lista de Comentários</Card.Header>
      <ListGroup variant="flush">
        {comments.map((comment, index) => (
          <ListGroup.Item key={index}>
            <div className="d-flex justify-content-between">
              <div>
                <h5>{comment.nome}</h5>
                <p>{comment.comentario}</p>
              </div>
              <div>
                <img src={comment.foto} alt={comment.name} className="img-thumbnail" />
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default CommentList;
