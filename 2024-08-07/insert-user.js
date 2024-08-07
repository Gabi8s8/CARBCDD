const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const data = { name: 'Hello, prisma!' };
    await prisma.user.create({ data });
    console.log("Cadastro realizado com sucesso!");
}

main()