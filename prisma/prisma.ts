import { PrismaClient } from './generated/client';
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  // можно взять из .env, как в доках
  url: process.env.DATABASE_URL
});

const prismaClientSingleton = () => {
  return new PrismaClient({ adapter });
};


declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
