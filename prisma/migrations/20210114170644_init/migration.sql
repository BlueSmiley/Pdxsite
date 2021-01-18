-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "gameId" INTEGER,
    FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Statistic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "campaignId" INTEGER,
    FOREIGN KEY ("campaignId") REFERENCES "Campaign" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Visualisation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "timeRange" TEXT NOT NULL,
    "imageURL" TEXT,
    "statisticId" INTEGER,
    FOREIGN KEY ("statisticId") REFERENCES "Statistic" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Game.name_unique" ON "Game"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Campaign.name_unique" ON "Campaign"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Statistic.name_unique" ON "Statistic"("name");
