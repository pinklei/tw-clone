-- DropIndex
DROP INDEX `Tweet_authorId_key` ON `Tweet`;

-- CreateIndex
CREATE INDEX `Tweet_authorId_idx` ON `Tweet`(`authorId`);
