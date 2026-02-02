import prisma from "~/prisma/prisma";
import os from "os";

export default defineEventHandler(async (event) => {
  console.log(os.platform());
  // Получение данных из запроса
  const { email }: { email: string } = getQuery(event);

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  return user;
});
