
# Finance Tracker

Finance Tracker is a web application designed to help users manage their finances effectively. It allows users to track their income, expenses, and view financial summaries in a user-friendly interface.

## Features

- **User Authentication**: Secure login and registration for users.
- **Dashboard**: A comprehensive overview of financial health, including income and expenses.
- **Transaction Management**: Add, edit, and delete transactions easily.
- **History Section**: View past transactions with date and amount formatting.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Technologies Used

- **Frontend**: 
  - React.js
  - React Router
  - Axios for API calls
  - Tailwind CSS for styling

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB for database management
  - Mongoose for object data modeling

## Installation

To get started with the Finance Tracker application, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Karam-Abbas/Finance-Tracker.git
   cd Finance-Tracker
   ```

2. **Install Dependencies**:
   For the backend:
   ```bash
   cd Backend
   npm install
   ```

   For the frontend:
   ```bash
   cd Frontend
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the `Backend` directory and add the following variables with specified info :
   ```
   MONGO_URL = "mongodb://localhost:27017/<-----DB NAME----->"
   JWT_PRIVATE_KEY="<-----PRIVATE KEY----->"
   JWT_PUBLIC_KEY="<-----PUBLIC KEY----->"
   ```
   
5. **Run the Application**:
   Start the backend server:
   ```bash
   cd Backend
   nodemon app.js
   ```

   Start the frontend application:
   ```bash
   cd Frontend
   nodemon
   ```

6. Open your browser and navigate to `http://localhost:5173/entry` to view the application.
   
7. In order to check debugger values run the following command first to check weather the DB has connected properly or is there any issue in the App.js of the backend
   ```bash
   $env:DEBUG="development:*"
   ```
   This will turn on the visibility of development debugger messages on the CLI .
   
## Pending Features/Work

-- Landing page which is to be placed at the `http://localhost:5173/` route.
-- A button/method to automatically log in the user that has previously logged in on the website and not logged out, without showing the login/signup page.

## Usage

- Upon launching the application, users can register or log in.
- Users can add their income and expenses through the dashboard.
- The history section displays all past transactions formatted with user-friendly date and currency formats.

## Formatting Money Amounts

The application formats money amounts using suffixes like k (thousands), M (millions), and B (billions) for better readability. For example:
- `1,000` becomes `1k`
- `1,000,000` becomes `1M`
  
This functionality enhances user experience by simplifying large numbers.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various finance tracking applications.

