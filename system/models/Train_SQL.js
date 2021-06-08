module.exports = (sequelize, DataTypes) => {
    let Train = sequelize.define('Train', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false
        },
        departure: {
            type: DataTypes.STRING,
            allowNull: false
        },
        arrival: {
            type: DataTypes.STRING,
            allowNull: false
        },
        available: {
            type: DataTypes.STRING,
            default: JSON.stringify([...Array(80).keys()].map(n => ++n))
        },
        booked: {
            type: [DataTypes.STRING],
            defaultValue: JSON.stringify([])
        }
    }, {
        tableName: 'trains',
        paranoid: true,
        timestamps: true,
        freezeTableName: true
    });

    return Train;
};
