import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './AdminPage.css'; 

const AdminPage = () => {

  const [trainFromTo, setTrainFromTo] = useState('');
  const [trainCost, setTrainCost] = useState('');

  const [planeFromTo, setPlaneFromTo] = useState('');
  const [planeCost, setPlaneCost] = useState('');

  const handleAddTrain = () => {
    const data = {
      train_name: trainFromTo,
      train_price: parseInt(trainCost)
    };
  
    axios.post('https://db-project-btzw.onrender.com/trains/add', data)
      .then(response => {
        console.log('Train ticket added successfully:', response.data);
        setTrainFromTo('');
        setTrainCost('');
        alert('You have added a new train successfully.');
      })
      .catch(error => {
        console.error('Error adding train ticket:', error);
      });
  };
  
  const handleAddPlane = () => {
    const data = {
      plane_name: planeFromTo,
      plane_price: parseInt(planeCost)
    };
  
    axios.post('https://db-project-btzw.onrender.com/planes/add', data)
      .then(response => {
        console.log('Plane ticket added successfully:', response.data);
        setPlaneFromTo('');
        setPlaneCost('');
        alert('You have added a new plane successfully.');
      })
      .catch(error => {
        console.error('Error adding plane ticket:', error);
      });
  };

  return (
    <div className='admin-container'>
      <div className='admin-heading'><h1>Admin Page</h1></div>
      <div className='admin-form-container'>
        <motion.div 
          className='admin-form-card' 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className='admin-form-title'>Add train ticket</h3>
          <input 
            className='admin-input' 
            placeholder='From - To' 
            type='text' 
            value={trainFromTo}
            onChange={e => setTrainFromTo(e.target.value)}
          />
          <input 
            className='admin-input' 
            placeholder='Cost' 
            type='number' 
            value={trainCost}
            onChange={e => setTrainCost(e.target.value)}
          />
          <motion.button 
            className='admin-button' 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddTrain}
          >
            Add
          </motion.button>
        </motion.div>

        <motion.div 
          className='admin-form-card' 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className='admin-form-title'>Add plane ticket</h3>
          <input 
            className='admin-input' 
            placeholder='From - To' 
            type='text' 
            value={planeFromTo}
            onChange={e => setPlaneFromTo(e.target.value)}
          />
          <input 
            className='admin-input' 
            placeholder='Cost' 
            type='number' 
            value={planeCost}
            onChange={e => setPlaneCost(e.target.value)}
          />
          <motion.button 
            className='admin-button' 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddPlane}
          >
            Add
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPage;
