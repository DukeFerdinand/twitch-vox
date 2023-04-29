CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS accounts (
    id CHAR(36) NOT NULL DEFAULT (gen_random_uuid()),
    username VARCHAR(50) UNIQUE NOT NULL,
    twitch_id VARCHAR(50) UNIQUE NOT NULL,

    PRIMARY KEY (id)
);
