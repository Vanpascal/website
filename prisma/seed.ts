import { faker } from "@faker-js/faker";

import { prisma } from "@/lib/prisma";

async function main() {
  console.log("Seeding database...");

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
