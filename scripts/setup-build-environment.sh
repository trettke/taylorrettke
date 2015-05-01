#!/bin/bash

set -x
set -e

gem install compass
npm install
npm install grunt-cli
npm install bower
bower install
bower install --save font-awesome
