const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function Filtros() {
    const onlineUsers = await prisma.user.findMany({
        where: { status: "Online"},
    });
    // console.log(onlineUsers);

    const userNameUnico = await prisma.user.findMany({
        where: { }
    })

}

Filtros();