const mongoose = require('mongoose');
const Train = mongoose.model('Train');

module.exports = async (req, res) => {
    
    try {

        const { id } = req.params;

        let train = await Train.findOne({ id });
    
        res.status(200).json({
            success: true,
            data: train
        });
    }
    catch(e) {
        res.status(500).json({
            success: false,
            data: 'server_error'
        })
    }
};