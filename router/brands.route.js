const { Router } = require(`express`);
const router = Router();

router.get(`/brands`,(req,res)=>{
    res.json(`Данный бренд`)
})
router.post(`/brands`,(req,res)=>{
    res.json(`Добавлен новый бренд`)
})
router.delete(`/brands`,(req,res)=>{
    res.json(`Данный бренд удалён `)
})

module.exports = router