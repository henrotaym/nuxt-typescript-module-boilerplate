#!/bin/bash
docker-compose build --no-cache
./cli yarn install && yarn dev:build && yarn dev