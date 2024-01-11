//todo EXPRESS
//Express is a minimal and flexible Node.js web application framework
// that provides a robust set of features for web and mobile applications. APIs.

//
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// app.get();
//get - to get information ex cars
//post - to create a car as example
//delete - to delete car
//put - to change a brand of car
//patch - if you need to change the engine of car

const users = [
    {id: 1, name: 'Іван', email: 'ivan@example.com', age: 10},
    {id: 2, name: 'Марія', email: 'maria@example.com'},
    {id: 3, name: 'Петро', email: 'petro@example.com'},
    {id: 4, name: 'Ольга', email: 'olga@example.com'},
    {id: 5, name: 'Андрій', email: 'andriy@example.com'},
    {id: 6, name: 'Наталія', email: 'natalia@example.com'},
    {id: 7, name: 'Максим', email: 'maxim@example.com'},
    {id: 8, name: 'Софія', email: 'sofia@example.com'},
    {id: 9, name: 'Анна', email: 'anna@example.com'},
    {id: 10, name: 'Олександр', email: 'oleksandr@example.com'}
];


app.get('/users', (req, res) => {
    // console.log('users');
    // res.send(users);
    // res.json(users);
    // res.sendStatus(202);
    res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    console.log(req.params);
    res.json({
        data: users[+id-1]
    })
});

app.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    users.splice(+id - 1, 1);
    res.sendStatus(204);

});

app.post('/users', (req, res) => {

    const body = req.body;
    users.push(body);

    // console.log('post');
    res.sendStatus(201).json({
        message: "user was created!"
    });
});


//to start the project this needs to be done
const port = 3000;
app.listen(port, () => {
    console.log(`server has started on PORT ${port}`)
})


//200 - everything is ok
//300 - перенаправлення
//400 - client error bad request
//500 - server error










