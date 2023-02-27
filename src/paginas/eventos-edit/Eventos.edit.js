import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventosEdit() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/items');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      if (selectedItem) {
        await axios.put(`http://localhost:3000/api/items/${selectedItem.id}`, formData);
      } else {
        await axios.post('http://localhost:3000/api/items', formData);
      }

      fetchData();
      setFormData({ title: '', description: '' });
      setSelectedItem(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = item => {
    setFormData({
      title: item.title,
      description: item.description
    });
    setSelectedItem(item);
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`http://localhost:3000/api/items/${id}`);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
        <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
        <button type="submit">{selectedItem ? 'Edit' : 'Create'}</button>
      </form>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventosEdit;
