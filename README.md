# Maintenance Management App

This is a full-stack web application for managing maintenance tasks. It allows users to submit, view, update, and delete maintenance jobs.

## Features

- **CRUD Operations**: Users can create, read, update, and delete maintenance jobs.
- **Job Status**: Each job has a status indicating whether it's submitted, in progress, or completed.
- **Error Handling**: Frontend and backend are equipped with error handling to provide a smooth user experience.
- **Responsive Design**: The frontend is designed using React Bootstrap, ensuring a responsive layout across different devices.
- **RESTful API**: The backend provides a RESTful API for interacting with the database.

## Technologies Used

- **Frontend**: React.js, React Bootstrap
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB Atlas (Cloud-hosted MongoDB)
- **Deployment**: Heroku (for backend), Netlify (for frontend)

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

```bash
git clone <repository-url>
cd maintenance-management-app
```

2. Install dependencies for both frontend and backend:

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:

   - Create a `.env` file in the `backend` directory and add your MongoDB connection URI:

     ```plaintext
     MONGODB_URI=<your-mongodb-uri>
     ```

4. Start the backend server:

```bash
# From the backend directory
npm start
```

5. Start the frontend development server:

```bash
# From the frontend directory
npm start
```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Deployment

The application is deployed on Heroku for the backend and Netlify for the frontend. Continuous deployment is set up using GitHub Actions.

- **Backend**: The backend server is automatically deployed to Heroku whenever changes are pushed to the `main` branch.

- **Frontend**: The frontend is automatically deployed to Netlify whenever changes are pushed to the `main` branch.

## Contributing

Contributions are welcome! If you find any bugs or want to suggest improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
