import { Hono } from 'hono'

const app = new Hono()

app.post('/user', async (c) => {
  const body = await c.req.json();
  const user = c.req.query('user');
  const password = c.req.header('password');
  console.log(body, user, password);
})

export default app

//now we can depoy this using npm run deploy 