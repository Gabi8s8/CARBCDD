const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const data = [
    {
      name: 'João Silva',
      user: 'jsilva',
      type: 'Admin',
      email: 'joao.silva@example.com',
      password: 'senha123',
      birth_date: new Date('1985-06-15').toISOString(),
    },
    {
      name: 'Maria Oliveira',
      user: 'mariaoli',
      type: 'User',
      email: 'maria.oliveira@example.com',
      password: 'senha456',
      birth_date: new Date('1990-11-22').toISOString(),
    },
    {
      name: 'Pedro Santos',
      user: 'pedros',
      type: 'User',
      email: 'pedro.santos@example.com',
      password: 'senha789',
      birth_date: new Date('1982-03-12').toISOString(),
    },
    {
      name: 'Ana Costa',
      user: 'anacosta',
      type: 'User',
      email: 'ana.costa@example.com',
      password: 'senha101',
      birth_date: new Date('1995-07-30').toISOString(),
    },
    {
      name: 'Carlos Lima',
      user: 'carlosl',
      type: 'Admin',
      email: 'carlos.lima@example.com',
      password: 'senha202',
      birth_date: new Date('1988-12-05').toISOString(),
    },
  ];
  await prisma.user.createMany({ data });

  const usuarios = await prisma.user.findMany();
  console.log(usuarios);
}

main();
