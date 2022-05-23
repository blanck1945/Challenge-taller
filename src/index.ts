import express from "express";
import MongoConnection from "./connections/MongoConnection";
// Client Routes
import ClientGetRoutes from './ClientService/routes/GET.routes'
import ClientPostRoutes from './ClientService/routes/POST.routes'
import ClientPatchRoutes from './ClientService/routes/PATCH.routes'
import ClientDeleteRoutes from './ClientService/routes/DELETE.routes'
// Car Routes
import CarsGetRoutes from "./CarsService/routes/GET.routes";
import CarsPostRoutes from "./CarsService/routes/POST.routes";
import CarsPatchRoutes from "./CarsService/routes/PATCH.routes";
// Transactions Routes
import TransactionsGetRoutes from './TransactionsService/routes/GET.routes'
import TransactionsPostRoutes from './TransactionsService/routes/POST.routes'
import TransactionsPatchRoutes from './TransactionsService/routes/PATCH.routes'
import TransactionsDeleteRoutes from './TransactionsService/routes/DELETE.routes'


import swaggerUi from 'swagger-ui-express' 
import docs from './docs/index'

const app = express();
const port = 5000;

app.use(express.json());

// Client Routes
app.use('/api', ClientGetRoutes)
app.use('/api', ClientPostRoutes)
app.use('/api', ClientPatchRoutes)
app.use('/api', ClientDeleteRoutes)

// Car Routes
app.use('/api', CarsGetRoutes)
app.use('/api', CarsPostRoutes)
app.use('/api', CarsPatchRoutes)

// Transaction Routes
app.use('/api', TransactionsGetRoutes)
app.use('/api', TransactionsPostRoutes)
app.use('/api', TransactionsPatchRoutes)
app.use('/api', TransactionsDeleteRoutes)


// Swagger route
app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(docs)
);

app.get('/', (req, res) =>{
  res.send('<div><h1>Aplicacion de autos</h1></div>')
})

app.listen(port, async () => {
  try {
    console.log(`Example app listening at http://localhost:${port}`);
    await MongoConnection.enableConnnection();
  } catch (err) {
    console.error(err);
  }
});

export default app;