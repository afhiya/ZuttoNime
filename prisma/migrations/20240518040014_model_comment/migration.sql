-- CreateTable
CREATE TABLE `Comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_provider` VARCHAR(191) NOT NULL,
    `mal_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `user_image` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `anime_title` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
