# Serani Export Website

This is the source code for the Serani Export company website, including a Node.js backend.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your computer.

## Installation

1. Open a terminal/command prompt in this directory.
2. Run the following command to install dependencies:
   ```bash
   npm install
   ```

## Running the Server

### Option 1: Double-click Script (Windows)
Double-click the `start_server.bat` file in this directory. This will open a terminal window and start the server.

### Option 2: Command Line
1. Open a terminal/command prompt in this directory.
2. Run the command:
   ```bash
   npm start
   ```

## Accessing the Website

Once the server is running, open your web browser and go to:
[http://localhost:3001](http://localhost:3001)

## Features

- **Home Page**: Overview of the company.
- **Products**: Dynamic product listing fetched from the backend.
- **Contact**: Contact form that saves submissions to `submissions.json`.
- **Notifications**: You will receive a desktop notification (pop-up) whenever a new contact form is submitted.
- **About**: Company mission and vision.

## Files

- `public/`: Contains all frontend files (HTML, CSS, Images).
- `server.js`: The Node.js backend server.
- `submissions.json`: Stores contact form submissions.
