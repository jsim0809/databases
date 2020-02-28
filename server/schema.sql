CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(255) UNIQUE
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  messageText varchar(255),
  roomname varchar(255),
  userID INT NOT NULL REFERENCES users(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

