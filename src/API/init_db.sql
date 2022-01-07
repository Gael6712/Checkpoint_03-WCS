CREATE DATABASE music;

USE music;

CREATE TABLE `track` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `youtube_url` varchar(255) NOT NULL,
  `id_album` int NOT NULL
);

CREATE TABLE `album` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `artist` varchar(255) NOT NULL
);

ALTER TABLE `track` ADD FOREIGN KEY (`id_album`) REFERENCES `album` (`id`);
