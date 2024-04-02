-- CreateEnum
CREATE TYPE "JobPublishStatus" AS ENUM ('draft', 'published', 'archived');

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "about_job" VARCHAR(1000) NOT NULL,
    "key_responsibilities" TEXT[],
    "education" VARCHAR(1000) NOT NULL,
    "preferred_qualifications" VARCHAR(1000) NOT NULL,
    "show_organization_details" BOOLEAN NOT NULL,
    "publish_status" "JobPublishStatus" NOT NULL DEFAULT 'draft',
    "receive_application_from" TIMESTAMP(3) NOT NULL,
    "receive_application_to" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
