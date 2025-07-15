const express = require('express');
const bodyParser = require('body-parser');
const  path = require('path');
const app = express();
const userRoutes = require('./routers/userRoutes');
const blogRoutes = require('./routers/blogRoutes');
const staticRouter = require('./routers/staticRouter');

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.static(path.resolve('./public')));
app.use(bodyParser.json());

app.use('/', staticRouter);
app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);



app.listen(3000,() => {
    console.log('Server is running  on port 3000')
})