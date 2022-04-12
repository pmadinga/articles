/*
  Warnings:

  - Added the required column `title` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Blog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL DEFAULT 'Phiwa Madinga',
    "body" TEXT NOT NULL,
    "title" TEXT NOT NULL
);
INSERT INTO "new_Blog" ("author", "body", "date", "description", "id") SELECT "author", "body", "date", "description", "id" FROM "Blog";
DROP TABLE "Blog";
ALTER TABLE "new_Blog" RENAME TO "Blog";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
