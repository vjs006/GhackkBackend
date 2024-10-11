# Webtoon Management API

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [GET /webtoons](#get-webtoons)
  - [POST /webtoons](#post-webtoons)
  - [DELETE /webtoons](#delete-webtoons)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The **Webtoon Management API** allows users to manage a collection of webtoons, providing functionalities to create, retrieve, and delete webtoon entries. This project is designed for webtoon enthusiasts who want to keep track of their favorite titles.

## Features
- **Create Webtoon**: Add new webtoon entries with details like title, description, characters, and ID.
- **Get Webtoons**: Retrieve a list of all webtoons or filter by specific parameters.
- **Delete Webtoon**: Remove webtoons from the database using their unique ID.

## Technologies Used
- **Node.js**: For building the API server.
- **Express**: A web framework for Node.js to handle routes and requests.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **MongoDB**: A NoSQL database to store webtoon entries.
- **Git**: For version control and project management.

## Installation
1. Clone the repository:
   git clone https://github.com/yourusername/yourproject.git
   
2. Navigate to the project directory:
   cd yourproject

3. Install npm: npm install

4. Set up your MongoDB connection string in a .env file (or directly in the code) for local development:
  MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/content?retryWrites=true&w=majority

## Usage
Start the server: npm start
API will be available at port http://localhost:3001.

