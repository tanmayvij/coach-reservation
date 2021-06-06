const mongoose = require('mongoose');
const Train = mongoose.model('Train');

module.exports = async (req, res) => {
    
    try {

        let { id } = req.params;
        
        if(!id || !id.length) {
            return res.status(400).json({
                success: false,
                data: 'id_not_provided'
            });
        }

        id = parseInt(id);

        let train = await Train.findOne({ id });

        if(!train) {
            return res.status(404).json({
                success: false,
                data: null
            });
        }
    
        return res.status(200).json({
            success: true,
            data: train
        });
    }
    catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            data: 'server_error'
        })
    }
};