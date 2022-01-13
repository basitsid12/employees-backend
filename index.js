const express = require('express')
const mongoose = require('mongoose')
const app = express()
const employees = require('./employeeRoute');
const cors = require('cors')

mongoose.connect('mongodb+srv://abdulbasit:basit123@cluster0.qbsti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('Connected to mongoodb..'))
.catch(err => console.log('Could not connect to mongodb', err))

app.use(express.json())
app.use(cors())
app.use('/api/employees', employees)
app.get('/', (req, res) => {
    res.send('success')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`listing on port ${PORT}`) );