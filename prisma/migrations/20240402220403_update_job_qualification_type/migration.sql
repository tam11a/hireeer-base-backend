/*
  Warnings:

  - The `preferred_qualifications` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "preferred_qualifications",
ADD COLUMN     "preferred_qualifications" VARCHAR(1000)[];
