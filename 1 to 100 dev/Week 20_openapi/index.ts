import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { Openapispec } from './Openapispec';

const app = express();
const port = 3000;

app.use(express.json());

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(Openapispec));

let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' }
];

//@ts-ignore
app.get('/users', (req, res) => {
  const { name } = req.query as string | any;

  if (name) {
    //@ts-ignore
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filteredUsers);
  } else {
    res.json(users);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
