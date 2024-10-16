/*
  Warnings:

  - You are about to drop the `SalaryType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_JobToSalaryType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_JobToSalaryType" DROP CONSTRAINT "_JobToSalaryType_A_fkey";

-- DropForeignKey
ALTER TABLE "_JobToSalaryType" DROP CONSTRAINT "_JobToSalaryType_B_fkey";

-- DropTable
DROP TABLE "SalaryType";

-- DropTable
DROP TABLE "_JobToSalaryType";
