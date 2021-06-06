const mongoose = require('mongoose');
const Train = mongoose.model('Train');

module.exports = async (req, res) => {
    
    try {
        let trains = await Train.find({});
    
        res.status(200).json({
            success: true,
            data: trains
        });
    }
    catch(e) {
        res.status(500).json({
            success: false,
            data: 'server_error'
        })
    }
};