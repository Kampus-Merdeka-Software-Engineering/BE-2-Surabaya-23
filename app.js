const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//endpoint get all customers
app.get('/customers', (req, res) => {
    res.json({
        message: 'Get list all data customers is success',
        data: [
            {
                name: 'Trio Hermanto',
                email: 'triohermanto@gmail.com',
                role: 'beban'
            },
            {
                name: 'Hermanto',
                email: 'hermanto@gmail.com',
                role: 'test'
            }
        ]
    })
})

//endpoint get detail customers by id
app.get('/customers/:id', (req, res) => {
    res.json({
        message: 'Get detail data customers is success',
        data:
            {
                name: 'Trio Hermanto',
                email: 'triohermanto@gmail.com',
                role: 'beban'
            }
    })
})

//endpoint post customers
app.post('/customers', (req, res) => {
    res.json({
        message: 'Create data customers success',
        data: 
            {
                name: 'Trio Hermanto',
                email: 'triohermanto@gmail.com',
                role: 'beban',
                created_at: '2023/11/27 20:30:00',
                updates_at: '2023/11/27 20:30:00'
            }
    })
})

//endpoint update customers by id
app.put('/customers/:id', (req, res) => {
    res.json({
        message: 'Create data customers success',
        data: 
            {
                name: 'Trio tes',
                email: 'tes@gmail.com',
                role: 'beban tes',
                created_at: '2023/11/27 20:30:00',
                updates_at: '2023/11/27 20:40:00'
            }
    })
})

//endpoint delete by id
app.delete('/customers/:id', (req, res) => {
    res.json({
        message: 'Delete data customer by id $id success',
        data: {}
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})