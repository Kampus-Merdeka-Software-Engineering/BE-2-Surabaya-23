const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

function LoggerMiddleware(req, res, next){
    console.log(`Reques api recived at: ${new Date()}`)
    next();
}

app.use(LoggerMiddleware);

//endpoint get all customers
app.get('/customers', (req, res) => {
    const { keyword, search } = req.query;
    let data = [
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
    
    if(search){
        data.map(value => {
            value.search = search
            return value
        });
    }

    console.log('keyword: ', keyword)
    console.log('search: ', search )

    res.json({
        message: 'Get list all data customers is success',
        data: data
    })
})

//endpoint get detail customers by id
app.get('/customers/:id', (req, res) => {
    const customerId = req.params.id;
    res.json({
        message: `Get detail data customers by id ${customerId} success`,
        data:
            {
                id: 'customerId',
                name: 'Trio Hermanto',
                email: 'triohermanto@gmail.com',
                role: 'beban'
            }
    })
})

//endpoint post customers
app.post('/customers', (req, res) => {
    const { name, email, role } = req.body;

    res.json({
        message: 'Create data customers success',
        data: 
            {
                name: name,
                email: email,
                role: role,
                created_at: '2023/11/27 20:30:00',
                updates_at: '2023/11/27 20:30:00'
            }
    })
})

//endpoint update customers by id
app.put('/customers/:id', (req, res) => {
    const customerId = req.params.id;
    res.json({
        message: `Update data customers by id ${customerId} success`,
        data: 
            {
                id: 'customerId',
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
    const customerId = req.params.id;
    res.json({
        message: `Delete data customer by id ${customerId} success`,
        data: {}
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})