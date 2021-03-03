CREATE DATABASE postapp;

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(255)
);

INSERT INTO post (name, description) VALUES
('Test', 'Testing the db'),
('Hello', 'World');