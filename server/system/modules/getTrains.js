module.exports = (req, res) => {
    res.json({
        success: true,
        data: [
        {
            id: 1000,
            origin: "Delhi",
            destination: "Mumbai",
            departure: "06:00",
            arrival: "18:00",
            available: 70
        }
    ]});
};