# Building Applications with React and ASP.NET Core

This project demonstrates how to build a modern web application using **React** for the frontend and **ASP.NET Core** for the backend. It serves as a practical example of integrating these two powerful technologies to create a full-stack application.

## Project Overview

The application is a simple yet functional web app that showcases the following:

- **Frontend**: Built with **React**, a popular JavaScript library for building user interfaces.
- **Backend**: Powered by **ASP.NET Core**, a cross-platform, high-performance framework for building modern, cloud-based, and internet-connected applications.
- **Integration**: The frontend and backend are seamlessly integrated to demonstrate how data can be exchanged between the two layers.

### Key Features

1. **React Frontend**:
   - Uses React components to create a dynamic and responsive user interface.
   - Demonstrates state management and component lifecycle methods.
   - Communicates with the backend via RESTful APIs.

2. **ASP.NET Core Backend**:
   - Provides a REST API to handle CRUD (Create, Read, Update, Delete) operations.
   - Built with C# and follows best practices for API design.
   - Includes controllers, models, and services to manage data and business logic.

3. **Full-Stack Integration**:
   - The React frontend fetches data from the ASP.NET Core backend using HTTP requests.
   - Demonstrates how to handle CORS (Cross-Origin Resource Sharing) for secure communication between the frontend and backend.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- **.NET SDK**: Ensure you have the .NET SDK installed. Download it from [here](https://dotnet.microsoft.com/download).
- **Node.js**: Ensure you have Node.js installed. Download it from [here](https://nodejs.org/).
- **Code Editor**: Use a code editor like Visual Studio Code or Visual Studio.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/andyMcLang/building-applications-with-react-and-aspnet-core.git
   cd building-applications-with-react-and-aspnet-core
   ```

2. **Set Up the Backend**:
   - Navigate to the backend folder:
     ```bash
     cd Backend
     ```
   - Restore dependencies and build the project:
     ```bash
     dotnet restore
     dotnet build
     ```
   - Run the backend:
     ```bash
     dotnet run
     ```
   - The backend will be available at `http://localhost:5000` or `https://localhost:5001`.

3. **Set Up the Frontend**:
   - Navigate to the frontend folder:
     ```bash
     cd ../Frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the frontend:
     ```bash
     npm start
     ```
   - The frontend will be available at `http://localhost:3000`.

4. **Explore the Application**:
   - Open your browser and navigate to `http://localhost:3000`.
   - Interact with the application to see how the frontend and backend work together.

## Project Structure

```
building-applications-with-react-and-aspnet-core/
├── Backend/                # ASP.NET Core backend
│   ├── Controllers/        # API controllers
│   ├── Models/             # Data models
│   ├── Services/           # Business logic and services
│   └── Program.cs          # Entry point for the backend
├── Frontend/               # React frontend
│   ├── public/             # Static assets
│   ├── src/                # React components and logic
│   └── package.json        # Frontend dependencies
└── README.md               # Project documentation
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This `README.md` provides a clear overview of the project, its features, and how to set it up. Feel free to customize it further to suit your needs!