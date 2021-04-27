CREATE TABLE `Message` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `from` INTEGER,
    `target_id` INTEGER,
    `media` VARCHAR(255),
    `message` VARCHAR(255)
)  ENGINE=INNODB;

INSERT INTO
    `Message`(`from`, `target_id`, `media`, `message`)
VALUES
    ('123','321','/images/Random-Media-One.jpg', 'Random Message One'),
    ('456','123','/images/Random-Media-Two.jpg', 'Random Message Two'),
    ('789','321','/images/Random-Media-Three.jpg', 'Random Message Three'),
    ('321','456','/images/Random-Media-Four.jpg', 'Random Message Four'),
    ('321','789','/images/Random-Media-Five.jpg', 'Random Message Five');