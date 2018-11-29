# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

You're going to need postgres installed to work in this application. Assuming you already have it set up, log in with your superuser account and run the following commands:

```postgresql
CREATE USER lorecharacters_owner WITH PASSWORD 'lorecharacters_owner';
ALTER USER lorecharacters_owner createdb;
ALTER USER lorecharacters_owner with SUPERUSER;

```

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
