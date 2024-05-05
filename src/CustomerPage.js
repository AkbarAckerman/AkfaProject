import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import "./CustomerPage.css";

const CustomerPage = () => {

    const [trains, setTrains] = useState([]);
    const [planes, setPlanes] = useState([]);

    const getTrainApi = () => {
        axios.get('https://db-project-btzw.onrender.com/trains')
            .then(res => {
                console.log(res.data);
                setTrains(res.data);
            }).catch(err => {
                console.log(err);
            });
    };

    const getPlaneApi = () => {
        axios.get('https://db-project-btzw.onrender.com/planes')
            .then(res => {
                console.log(res.data);
                setPlanes(res.data);
            }).catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        getTrainApi();
        getPlaneApi();
    }, []);

    const handleBuyTicket = (ticket) => {
        const { train_name, train_price, plane_name, plane_price } = ticket;
    
        const historyData = {
            history_name: train_name || plane_name,
            history_price: train_price || plane_price,
        };
    
        axios.post('https://db-project-btzw.onrender.com/history/add', historyData)
            .then(res => {
                console.log(res.data);
                if (train_name) {
                    alert('You have bought a train ticket successfully.');
                } else if (plane_name) {
                    alert('You have bought a plane ticket successfully.');
                }
            }).catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="customer-page">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h2>Train Tickets Information:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Routes</th>
                            <th>Prices</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trains.map((trainItem, index) => (
                            <tr key={index}>
                                <td>{trainItem.train_name}</td>
                                <td>${trainItem.train_price}</td>
                                <td>
                                    <Button variant="success" onClick={() => handleBuyTicket(trainItem)}>Buy</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h2>Plane Tickets Information:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Routes</th>
                            <th>Prices</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {planes.map((planeItem, index) => (
                            <tr key={index}>
                                <td>{planeItem.plane_name}</td>
                                <td>${planeItem.plane_price}</td>
                                <td>
                                    <Button variant="success" onClick={() => handleBuyTicket(planeItem)}>Buy</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>
        </div>
    );
};

export default CustomerPage;
