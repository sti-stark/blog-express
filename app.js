/* ---------- [EXPRESS] -------- */
const express = require('express');
const app = express();

/* ---------- [MODEL & ROUTERS] ------- */
require('./db/mongoose');
const blogRouter = require('./routers/blog');
const Blog = require('./models/blog');

/* -------------- [PORT] -------------- */
const port = process.env.PORT || 3000

/* ---------- [APP LISTEN] ------------ */
app.listen(port, () => {
    console.log(`Server listening to port ${port}`);
})

/* ----------- [EJS VIEW ENGINE] -------- */
app.set('view engine', 'ejs');

/* --------------- [MIDDLEWARE] ------------- */
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});

/*------------- [RUTAS WEB] ------------ */
app.get('/', async (req, res) => {
    try {
        const blog = await Blog.find({})
        res.render('index.ejs', { title: 'Blog', blog: blog })
    } catch (error) {
        res.render('index.ejs', { title: 'Blog', blog: [] })
    }
});

app.get('/new',(req,res)=>{
    res.render('quiz',{title:'Form'})
})

/**----------- [API ROUTING] ----------- */
app.use('/api', blogRouter);

/**----------- [ERROR] ----------------- */
app.use((req,res)=>{
    res.status(404).render('404',{})
});