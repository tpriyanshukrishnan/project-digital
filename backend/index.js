import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/soccerRoutes';

const app = express();
const PORT = 4000 

// mongo connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB');

//bodyparse setup 
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors());

routes(app);

app.get('/',(req,res)=> res.send(`Our soccer appllication is running ${PORT}`))
app.listen(PORT, ()=> 
    console.log(`your soccer server is running at port ${PORT}`)
)

