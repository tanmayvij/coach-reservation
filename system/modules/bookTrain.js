const mongoose = require('mongoose');
const Train = require('../sequelize').Train;

module.exports = async (req, res) => {
    try {
        let { id, numSeats } = req.body;

        // Check for parameters
        if(!id || !id.length || !numSeats) {
            return res.status(400).json({
                success: false,
                data: 'Missing parameters.'
            });
        }

        id = parseInt(id);

        let train = await Train.findOne({ id });

        if(!train) {
            return res.status(404).json({
                success: false,
                data: 'Train does not exist.'
            });
        }

        train.available = JSON.parse(train.available);
        train.booked = JSON.parse(train.booked);

        // Return an error if seats cannot be alloted
        if(numSeats > train.available.length) {
            return res.status(422).json({
                success: false,
                data: `${numSeats} seats are not available.`
            });
        }

        let alloted = [];

        // Create an array of all 12 rows
        let rows = [];

        for(let i=0; i<12; i++) { // First iterator (rows)
            let arr = [];
            for(let j=1; j<=7; j++) { // Second iterator (seats in i'th row)
                if(train.available.includes( (i*7) + j )) // Check whether the seat is available
                {
                    arr.push( (i*7) + j );
                }
            }
            rows.push(arr);
        }
        
        for (let row of rows) {
            // Get the maximum continuous seats available in a row
            let max = 0, j;
            for (let i=0;i<row.length;i++) {
                j = row[i];
                    
                while(row.includes(j))
                    j += 1;
        
                if(max < j - row[i]) max = j - row[i];
            }
            // First condition: all seats are available in one row (contiguous)
            if(max >= numSeats) {
                for(let i=0; i<numSeats; i++) {
                    alloted.push(row[i]);
                }
                break;
            }
        }
        for (let row of rows) {
            // Second condition: there is no row in which all seats can be alloted in the same row
            if(alloted.length < numSeats) {
                // Allot all available seats in a row until number of required seats are achieved.
                alloted = [...alloted, ...row];
            }
            else {
                 // If more seats are alloted than needed, remove extra seats
                if(alloted.length > numSeats) {
                    alloted = alloted.slice(0, numSeats - 1);
                }
            }
        }


        // Book the seats in the database
        train.available = train.available.filter(s => !alloted.includes(s));
        train.booked = [...train.booked, ...alloted];
        train.booked.sort();

        res.status(200).json({
            success: true,
            data: {
                alloted,
                train
            }
        });

        train.booked = JSON.stringify(train.booked);
        train.available = JSON.stringify(train.available);
        train.save();
    }
    catch(e) {
        console.log(e);
        return res.status(500).json({
            success: true,
            data: "Something went wrong."
        })
    }
}