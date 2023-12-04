/*
  Warnings:

  - You are about to drop the column `desc` on the `menu` table. All the data in the column will be lost.
  - Added the required column `description` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `menu` DROP COLUMN `desc`,
    ADD COLUMN `description` VARCHAR(255) NOT NULL;
