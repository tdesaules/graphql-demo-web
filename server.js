const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const fetch = require("node-fetch");

app.use(serve('dist'));

const server = require('http').createServer(app.callback())
const io = require('socket.io')(server);

io.on('connection', function (socket) {

  console.log('socket.io connected')

  fetch('http://ae-graphqldemoapi.service.consul/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({query: `{ 
      employees { 
        id, 
        firstname, 
        lastname 
      } 
    }`})
  })
  .then(response => response.json())
  .then(function(response) {
    employees = response.data.employees
    console.log('GraphQL Employees:', employees)
    socket.emit('employees', employees)
  });

  socket.on('employee-id', function (data) {
    fetch('http://ae-graphqldemoapi.service.consul/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query: `{ 
        employee(id: ${data}) { 
          firstname, 
          lastname, 
          team { 
            name,
            employees {
              firstname,
              lastname
            }
          }, 
          boss { 
            firstname, 
            lastname, 
            team { 
              name 
            }
          }
        }
      }`})
    })
    .then(response => response.json())
    .then(function(response) {
      employee = response.data.employee
      console.log('GraphQL Employee:', employee)
      socket.emit('employee', employee)
    });
  }); 
  
  socket.on('disconnect', function(){
    console.log('socket.io disconnected');
  });

});

server.listen(3000, function () {
  console.log('Server listening on port 3000\n');
});