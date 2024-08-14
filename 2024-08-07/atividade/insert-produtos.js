const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const data = [
    {
      name: 'Caderno Universitário',
      description:
        'Caderno com 200 folhas, capa dura e espiral. Ideal para anotações diárias.',
      price: 24.99,
      stock: 150,
      assessment: 4.5,
    },
    {
      name: 'Caneta Esferográfica',
      description:
        'Caneta esferográfica de tinta azul, com ponta fina. Ideal para escrita precisa.',
      price: 1.49,
      stock: 500,
      assessment: 4.8,
    },
    {
      name: 'Lápis Preto HB',
      description:
        'Lápis preto HB com ponta resistente e ótima para escrita e desenho.',
      price: 0.99,
      stock: 300,
      assessment: 4.7,
    },
    {
      name: 'Marca Texto Amarelo',
      description:
        'Marca texto amarelo fluorescente, ideal para destacar informações importantes.',
      price: 2.99,
      stock: 200,
      assessment: 4.6,
    },
    {
      name: 'Apontador com Depósito',
      description:
        'Apontador de lápis com depósito para aparas, compacto e eficiente.',
      price: 3.49,
      stock: 180,
      assessment: 4.4,
    },
  ];
  await prisma.product.createMany({ data });

  const produtos = await prisma.product.findMany();
  console.log(produtos);
}

main();
