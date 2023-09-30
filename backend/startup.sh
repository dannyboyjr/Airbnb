#!/bin/sh
# Remove existing database
rm -f db/dev.db
# Run migrations
npx dotenv sequelize db:migrate
# Seed database
npx dotenv sequelize db:seed:all
# Start the application
npm start