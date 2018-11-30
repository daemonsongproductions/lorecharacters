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

* Application setup

Just run `bin/setup`, which should take care of getting things installed and ready to run.

If you've pulled down new code but your application is otherwise set up, a combination of: `bundle install`, `yarn`, and `rake db:migrate` should get you there. 

* How to run the application locally

`bin/run` will kick you off. Under the hood, it's executing `foreman start`, which will kick off any processes in the Procfile. The web process typically runs at `localhost:5000`.

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
