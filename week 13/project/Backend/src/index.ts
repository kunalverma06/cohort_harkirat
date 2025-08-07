import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { sign } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env.DATABASE_URL // ✅ Correct way
      }
    }
  }).$extends(withAccelerate())

  const body = await c.req.json()

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password
      }
    })

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET)
    return c.json({ jwt })
  } catch (e) {
    
    c.status(403)
    return c.json({ error: 'Error while signing up' })
  }
})

app.post("/api/v1/user/signin", (c) => c.text("hello"))
app.post("/api/v1/blog", (c) => c.text("hello"))
app.put("/api/v1/user/blog", (c) => c.text("hello"))
app.get("/api/v1/blog/:id", (c) => c.text("hello"))
app.get("/api/v1/blog/bulk", (c) => c.text("hello"))

export default app
