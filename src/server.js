const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('Nova msg', socket.id);
    
});


mongoose.connect('mongodb+srv://Lucaspw:Almondegas00@cluster0-w0e98.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true,
useUnifiedTopology: true
});

app.get('/', (req, res) =>{
    return res.send('Hello');
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);