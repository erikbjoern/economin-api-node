/*
  Warnings:

  - You are about to drop the column `startDate` on the `Budgets` table. All the data in the column will be lost.
  - Added the required column `startDay` to the `Budgets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Budgets" DROP COLUMN "startDate",
ADD COLUMN     "startDay" INTEGER NOT NULL;
