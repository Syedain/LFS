-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "collections" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "subcategory" TEXT,
ADD COLUMN     "targetDepartment" TEXT;
