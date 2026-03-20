# Mini Message Board

A simple message board application where users can view messages, read individual posts, and create new ones.

## Features

* View a list of all messages
* View a single message in detail
* Create and post new messages

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd to folder
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add:

   ```env
   PORT=your_port_here
   ```

### Running the Application

Start the app with:

```bash
npm run start
```

The application will run on the port specified in your `.env` file.

## Usage

* Go to the homepage to view all messages
* Click a message to view its details
* Create a new message using the app interface

## Project Structure

```
mini-message-board/
├── src/
    ├── classes/
    ├── constants/
    ├── controllers/
    ├── errors/
    ├── public/
    ├── routes/
    ├── views/
    ├── app.js
├── package.json
```

## Notes

* Make sure `PORT` is defined in your `.env` file
* This is a simple project demonstrating basic message board functionality

## License

MIT License
