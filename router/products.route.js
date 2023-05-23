const { Router } = require(`express`);
const router = Router();


router.get(`/products`,(req,res)=>{
    res.json(`продукт добавлен`)
})
router.get(`/products/:id`,(req,res)=>{
    res.json(`Продукт с данным ID`)
})
router.post(`/products`,(req,res)=>{
    res.json(`продукт был добавлен`)
})
router.delete(`/products/:id`,(req,res)=>{
    res.json(`продукт с данным id был удалён`)
})
 

module.exports = router