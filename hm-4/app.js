const express = require('express');

const app = express()
app.use(express.json())

const doctors = []


app.get('/doctors', (req, res) => {
    res.send(doctors)
})

app.get('/doctors/:id', (req, res) => {
    const doctor = doctors.find(doctor => doctor.id === parseInt(req.params.id))
    if (!doctor) res.status(404).send('Doctor doesnt exist')
    res.send(doctor)
})

app.post('/newdoctor', (req, res) => {
    const doctor = {
        id: doctors.length + 1,
        name: req.body.name,
        city: req.body.city,
        specialization: req.body.specialization
    }
    doctors.push(doctor)
    res.send(doctors)
})

app.listen(3000, () => {
    console.log('up and running on port 3000');
})