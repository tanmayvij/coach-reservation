const mongoose = require('mongoose');
const Train = require('../sequelize').Train;

module.exports = async (req, res) => {
    console.log(Train)
    try {
        let trains = await Train.findAll();

        trains.map((t) => {
            t.available = JSON.parse(t.available);
            t.booked = JSON.parse(t.booked);
            return t;
        });
    
        res.status(200).json({
            success: true,
            data: trains
        });
    }
    catch(e) {
        console.log(e)
        res.status(500).json({
            success: false,
            data: 'server_error'
        })
    }
};