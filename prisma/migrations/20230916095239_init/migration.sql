-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "data" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT 'https://images.unsplash.com/photo-1501183638710-841dd1904471',

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
