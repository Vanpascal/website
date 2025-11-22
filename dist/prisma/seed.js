"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const prisma_1 = require("@/lib/prisma");
async function main() {
    console.log("Seeding database...");
    // ------------------------
    // PUBLICATIONS
    // ------------------------
    for (let i = 0; i < 5; i++) {
        await prisma_1.prisma.publication.create({
            data: {
                title: faker_1.faker.lorem.sentence(),
                youtubeId: faker_1.faker.string.alphanumeric(11),
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
    await prisma_1.prisma.$disconnect();
});
