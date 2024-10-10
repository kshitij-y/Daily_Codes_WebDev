/*
  Warnings:

  - You are about to drop the column `firsname` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "firsname",
ADD COLUMN     "firstname" TEXT;
