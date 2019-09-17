CREATE DATABASE chirpydb;


USE chirbydb;

CREATE TABLE chirp_table (
  item_id INT(10) AUTO_INCREMENT NOT NULL,
  bird_name varchar(100) NOT NULL,
  family varchar(255) NOT NULL,
  voice varchar(255) NOT NULL,
  habitat varchar(255) NOT NULL,
  location varchar(255) NOT NULL,
  PRIMARY KEY(item_id)
);
   
   SELECT * FROM chirp_table;
   
   INSERT INTO chirp_table (bird_name, family, voice, habitat, location)
   VALUES ("Red-Throated Loon", "Loon", "Silent in NW", "Ocean and Bays", "Coast"),
   ("Pacific Loon", "Loon", "Silent in NW", "Ocean and bays", "Coast");
