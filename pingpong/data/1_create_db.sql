-- Creates a database and initializes its tables

CREATE DATABASE pingpong WITH
    ENCODING = 'UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

\c pingpong;

CREATE TABLE IF NOT EXISTS pings (
  id SERIAL PRIMARY KEY,
  timestamp timestamp NOT NULL
);
