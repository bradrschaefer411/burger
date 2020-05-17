CREATE DATABASE burgers_db;
USE burgers_db;  
GO

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255),
    devoured boolean,
    PRIMARY KEY (id)
);



-- CREATE TABLE Persons (
--     Personid int NOT NULL AUTO_INCREMENT,
--     LastName varchar(255) NOT NULL,
--     FirstName varchar(255),
--     Age int,
--     PRIMARY KEY (Personid)
-- );

-- Create a burgers table with these fields:


-- id: an auto incrementing int that serves as the primary key.

-- burger_name: a string.

-- devoured: a boolean.