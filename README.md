# Product APIs

## Introduction

This repo built with Express.js and Prisma, facilitates the management of a variety of products in a local PostgreSQL database via Docker. Each product entity includes attributes such as name, description, stock, quantity, category, and status (active or inactive). The API allows users to create and update products, fetch individual product information, and filter product lists based on attributes or status.

## Setup

- create the `.env file` with `DATABASE_URL="postgresql://postgres:{password}@localhost:5432/mydb?schema=public"` and `POSTGRES_PASSWORD={password}`
- run `docker-compose up -d` to run the PostgreSQL database in Docker
- run `npx prisma migrate dev --name init` to create the database schema
- run `npx prisma generate` to generate the Prisma client
- run `npm install` and `npm run dev` to start the backend server
