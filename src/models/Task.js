import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Task = sequelize.define('Tasks', {
    task_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Projects',
            key: 'project_id'
        }
    }, 
    creation_date: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    description_task: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false,
})