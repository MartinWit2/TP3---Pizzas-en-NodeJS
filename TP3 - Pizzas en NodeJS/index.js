import express from "express";
import { PizzaServices } from "./pizzas-services";
const app = express();
const port = 3000;

app.get('/pizza/:id',async (req,res) => {
    const pizza = await PizzaServices.getById(req.params.id)
    res.status(200).send(pizza)
})

app.get('/pizza',async (req,res) => {
    const pizza = await PizzaServices.getAll()
    res.status(200).send(pizza)
})

app.delete('/pizza/:id',async (req,res) => {
    const pizza = await PizzaServices.deleteById(req.params.id)
    res.status(200).send(pizza)
})



app.use(express.json())

app.post('/pizza', async (req, res) => {
    console.log("en post, req:",req)
    try{
        await PizzaServices.insert(req.body)
        res.status(200).json({message: 'Pizza creada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Fallo al insert'});
    }
})