/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `recentupdates` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `recentupdates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `recentupdates` ADD COLUMN `slug` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `recentupdates_slug_key` ON `recentupdates`(`slug`);
