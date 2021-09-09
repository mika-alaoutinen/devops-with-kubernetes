-- Creates a database and initializes its tables

CREATE DATABASE todoapp WITH
    ENCODING = 'UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

\c todoapp;

CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  message VARCHAR NOT NULL
);
