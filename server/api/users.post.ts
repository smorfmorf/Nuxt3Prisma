// server/api/users.post.ts
import prisma from "~/prisma/prisma";
import os from "os";

export default defineEventHandler(async (event) => {
  console.log(os.platform());
  // Получение данных из запроса
  const { param1, } = getQuery(event)
  console.log('param1: ', param1);
  const body = await readBody(event);
  const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      password: body.password,
    },
  });

  return user;
});
