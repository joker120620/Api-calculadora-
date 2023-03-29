const express= require('express');
const app = express();
//app.use(cors)
const cors=require('cors'); 
const port = process.env.PORT || 3000;
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
app.listen(port,()=>{
    console.log("iniciado\n ")
})
