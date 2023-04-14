/*
  Warnings:

  - You are about to drop the column `replyToId` on the `Tweet` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Tweet_replyToId_key` ON `Tweet`;

-- AlterTable
ALTER TABLE `Tweet` DROP COLUMN `replyToId`;
