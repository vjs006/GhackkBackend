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
   ```bash
   git clone https://github.com/yourusername/yourproject.git
   ```
2. Navigate to the project directory:
   ```bash
   cd yourproject
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up your MongoDB connection string in a `.env` file (or directly in the code) for local development:
   ```bash
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/content?retryWrites=true&w=majority
   ```
## Usage
1. Start the server:
   ```
   npm start
   ```

2. The API will be available at `http://localhost:3001`.

## API Endpoints

### GET /webtoons
Retrieve all webtoons or filter by parameters.

**Query Parameters:**
- `toonId`: (optional) Filter webtoons by their ID.

**Example Request:**
GET http://localhost:3001/webtoons?toonId=3
GET http://localhost:3001/webtoons

### POST /webtoons
Create a new webtoon entry.

**Request Body:**
```json
{
    "toonId": 3,
    "title": "Omniscent Reader's Viewpoint",
    "description": "Dokja was an average office worker whose sole interest was reading his favorite web novel 'Three Ways to Survive the Apocalypse.'...",
    "characters": ["Kim Dokja", "Yoo Junghyuk"]
}
```
POST http://localhost:3001/webtoons

### POST /webtoons
Delete a webtoon entry.

DELETE http://localhost:3001/webtoons?toonId=3
