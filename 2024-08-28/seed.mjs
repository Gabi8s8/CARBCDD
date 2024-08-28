import { PrismaClient } from "@prisma/client";
import { Faker, pt_BR } from "@faker-js/faker";

const prisma = new PrismaClient();

const seed = async () => {
    await prisma.User.deleteMany();
    const faker = new Faker({ locale: [pt_BR] });
    faker.seed(1)

    const data = Array.from({ length: 1000 }, () => {
        const status = faker.helpers.arrayElement([ 'Online', 'Offline', 'Ocupado', 'Na escola', 'No trabalho' ]);
        const userName = faker.internet.userName();
        const birthDate = faker.date.birthdate({ min: 18, mode: 'age' });
		const city = faker.location.city();
		const region = faker.helpers.arrayElement([ 'Norte', 'Nordeste', 'Centro Oeste', 'Sudeste', 'Sul']);
		const phone = faker.phone.number();		
        const avatar = faker.image.urlPicsumPhotos();
		const bio = faker.lorem.text();
		const createdAt = faker.date.past({ years: 1});

		return { status, userName, birthDate, city, region, phone, avatar, bio, createdAt };
	});

	await prisma.User.createMany({ data, skipDuplicates: true });
    }

seed()