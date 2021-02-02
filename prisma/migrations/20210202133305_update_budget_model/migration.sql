-- CreateEnum
CREATE TYPE "UnitOfTime" AS ENUM ('DAYS', 'MONTHS');

-- CreateTable
CREATE TABLE "Budgets" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "startDate" INTEGER NOT NULL,
    "startMonth" INTEGER NOT NULL,
    "startYear" INTEGER NOT NULL,
    "length" INTEGER NOT NULL,
    "unit" "UnitOfTime" NOT NULL,
    "recurring" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
