const express= require('express');
const app = express();
//app.use(cors)
const cors=require('cors'); 
app.use(cors());
app.use(express.json());
app.get('/', (req, res)=>{
    res.send("Bienvenido \n ")
})
app.post('/calcular', (req, res) => {
    let  oper=req.body.items
        oper=eval(oper)
    res.json({
        "items":oper
    })
});
app.listen(5000,()=>{
    console.log("iniciado\n ")
})
