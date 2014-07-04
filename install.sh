#!/bin/bash

# SERVER SETUP
bundle install
sec=`bundle exec rake secret`
echo SECRET_TOKEN=$sec >> .env
./build.sh
RAILS_ENV=production bundle exec rake db:migrate
