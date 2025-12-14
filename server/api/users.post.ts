// server/api/users.post.ts
import prisma from "~/lib/prisma"
import os from 'os'


export default defineEventHandler(async (event) => {
  console.log(os.platform());
  const body = await readBody(event)
  const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      password: body.password,
    },
  })

  return user
})