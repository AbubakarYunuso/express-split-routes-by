const express =require(`express`);
const app = express()

app.get(`/`,(req,res)=>{
    res.send(`Привет`)
})
app.use(require(`./router/products.route.js`))
app.use(require(`./router/brands.route.js`))

app.listen(4000,()=>{
    console.log(`сервер запущен`)
})



