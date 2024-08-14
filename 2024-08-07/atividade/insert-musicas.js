const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const data = [
    {
      title: 'Meu Abrigo',
      artists: 'Melim',
      album: 'Melim',
      gender: 'MPB',
      single: true,
      release_year: 2018,
      duration: new Date('2024-08-14T00:03:30Z').toISOString(),
    },
    {
      title: 'Trevo (Tu)',
      artists: 'Anavitória e Tiago Iorc',
      album: 'O Tempo é Agora',
      gender: 'MPB',
      single: true,
      release_year: 2018,
      duration: new Date('2024-08-14T00:03:15Z').toISOString(),
    },
    {
      title: 'Esperando na Janela',
      artists: 'Gilberto Gil',
      album: 'O Melhor de Gilberto Gil',
      gender: 'MPB',
      single: false,
      release_year: 2002,
      duration: new Date('2024-08-14T00:04:00Z').toISOString(),
    },
    {
      title: 'Ouvi Dizer',
      artists: 'Melim',
      album: 'Melim',
      gender: 'MPB',
      single: true,
      release_year: 2018,
      duration: new Date('2024-08-14T00:03:45Z').toISOString(),
    },
    {
      title: 'Som da Felicidade',
      artists: 'BossaCucaNova',
      album: 'BossaCucaNova',
      gender: 'MPB',
      single: false,
      release_year: 2020,
      duration: new Date('2024-08-14T00:03:55Z').toISOString(),
    },
  ];
  await prisma.music.createMany({ data });

  const musicas = await prisma.music.findMany();
  console.log(musicas);
} 

main();

