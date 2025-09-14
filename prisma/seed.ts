import { faker } from "@faker-js/faker";
import argon2 from "argon2";

import { prisma } from "@/lib/prisma";

async function main() {
  console.log("Seeding database...");

  // ------------------------
  // USERS (one login user)
  // ------------------------
  const passwordHash = await argon2.hash("Password123!");

  const adminUser = await prisma.users.create({
    data: {
      firstname: "Admin",
      lastname: "User",
      email: "admin@example.com",
      phone: "255700000000",
      password: passwordHash,
    },
  });

  // Random users
  for (let i = 0; i < 10; i++) {
    await prisma.users.create({
      data: {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email(),
        phone: "2557" + faker.string.numeric(8),
        password: await argon2.hash(faker.internet.password()),
      },
    });
  }

  // ------------------------
  // ANNOUNCEMENTS
  // ------------------------
  for (let i = 0; i < 5; i++) {
    await prisma.announcements.create({
      data: {
        title: faker.lorem.sentence(),
        link: faker.internet.url(),
        views: faker.number.int({ min: 0, max: 1000 }),
      },
    });
  }

  // ------------------------
  // BANNERS
  // ------------------------
  for (let i = 0; i < 5; i++) {
    await prisma.banners.create({
      data: {
        title: faker.lorem.words(3),
        link: faker.internet.url(),
      },
    });
  }

  // ------------------------
  // COMMENTS
  // ------------------------
  for (let i = 0; i < 10; i++) {
    await prisma.comments.create({
      data: {
        content: faker.lorem.paragraph(),
        author: faker.person.fullName(),
        photo: faker.image.url(),
        whoComment: faker.person.fullName(),
      },
    });
  }

  // ------------------------
  // COURSES
  // ------------------------
  for (let i = 0; i < 5; i++) {
    await prisma.courses.create({
      data: {
        coursename: faker.company.name(),
        duration: `${faker.number.int({ min: 1, max: 12 })} months`,
        courseType: faker.helpers.arrayElement(["Online", "Offline"]),
        description: faker.lorem.paragraph(),
        photo: faker.image.url(),
      },
    });
  }

  // ------------------------
  // DOCUMENTS
  // ------------------------
  for (let i = 0; i < 5; i++) {
    await prisma.documents.create({
      data: {
        title: faker.lorem.sentence(),
        link: faker.internet.url(),
        views: faker.number.int({ min: 0, max: 500 }),
      },
    });
  }

  // ------------------------
  // EMPLOYEES
  // ------------------------
  for (let i = 0; i < 5; i++) {
    await prisma.employees.create({
      data: {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email(),
        phone: "2557" + faker.string.numeric(8),
        category: faker.helpers.arrayElement(["Academic", "Support", "Admin"]),
        position: "staff",
        photo: faker.image.url(),
        createdAt: faker.date.past(),
        updatedAt: new Date(),
        department: faker.helpers.arrayElement(["IT", "HR", "Finance"]),
      },
    });
  }

  // ------------------------
  // PRODUCTS
  // ------------------------
  for (let i = 0; i < 5; i++) {
    await prisma.products.create({
      data: {
        product_name: faker.commerce.productName(),
        department: faker.commerce.department(),
        price: faker.commerce.price(),
        photo: faker.image.url(),
      },
    });
  }

  // ------------------------
  // RECENT UPDATES
  // ------------------------
  for (let i = 0; i < 5; i++) {
    await prisma.recentupdates.create({
      data: {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        photo: faker.image.url(),
        slug: faker.helpers.slugify(
          faker.lorem.words(3) + "-" + faker.number.int({ min: 100, max: 999 })
        ),
        date: faker.date.recent(),
      },
    });
  }

  // ------------------------
  // PUBLICATIONS
  // ------------------------
  for (let i = 0; i < 5; i++) {
    await prisma.publication.create({
      data: {
        title: faker.lorem.sentence(),
        youtubeId: faker.string.alphanumeric(11),
      },
    });
  }

  console.log("Seeding finished!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
