module.exports = (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            alloted: [11,3,5,7,9,1,3,5,7,9,1,3,5,7,9,1,3,5,7,9,1,3,5,7,9,1,3,5,7,9,3,5,7,9,],
        }
    });
}