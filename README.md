# Laravel React CRUD Documentation

This documentation provides a comprehensive guide for setting up and using the Laravel React CRUD project. This project is designed to demonstrate a basic CRUD (Create, Read, Update, Delete) application using Laravel (PHP) for the backend and React.js for the frontend. It serves as a foundation for your capstone project.

<hr>

## Table of Contents

• [Prerequisites]()

• [Getting Started]()

[Backend Setup]()

[Frontend Setup]()

• [Running the Application]()

• [Usage]()

• [Contributing]()

• [License]()

<hr>

## Prerequisites
Before you start setting up the Laravel React CRUD project, make sure you have the following prerequisites:

• PHP (8.0+)

• Composer

• Node.js (19+)

• npm (9+)

• Git (2+)

<hr>

## Getting Started

Follow these steps to set up the project on your local machine.

### Backend Setup

1. Clone the repository:
   
   ```bash
   git clone https://github.com/akosialbean/laravel-react-crud.git
   ```

2. Navigate to the backend directory:

   ```shell
   cd backend
   ```

3. Install Laravel dependencies using Composer:
   
   ```shell
   composer install
   ```

4. Copy the .env.example file to create a new .env file:
   
   ```shell
   cp .env.example .env
   ```

5. Generate an application key:

   ```shell
   php artisan key:generate
   ```

6. Configure your database connection by updating the .env file with your database credentials.

7. Migrate the database and seed it with initial data:

   ```shell
   php artisan migrate:refresh --seed
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:

   ```shell
   npm i
   ```
<hr>

## Environment Setup for Vite (Frontend Development)

1. Add the following environment variable to the .env file for Vite:
   
   ```
   VITE_API_URL=http://localhost:8000
   ```

   Update the URL as needed to match the Laravel development server URL.

<hr>

## Running the Application

Now that you've set up both the backend and frontend, you can start the application.

1. In the first terminal, start the Laravel development server from the backend directory:

   ```shell
   cd backend
   php artisan serve
   ```
    
    This will start the Laravel server at http://localhost:8000.

2. In the second terminal, compile and run the React.js application from the frontend directory:

   ```shell
   cd frontend
   npm run dev
   ```
    You can now access your application in your web browser, typically at http://localhost:3000.
    
<hr>

## Usage

Add information on how to use your CRUD application, including any specific features or functionality users should be aware of.

<hr>

## Contributing

To contribute to this project, follow these steps:

1. Fork the repository on GitHub.
   
2. Clone your fork locally:

   ```bash
   git clone https://github.com/akosialbean/laravel-react-crud.git
   ```

3. Create a new branch with a descriptive name:

    ```bash
    git checkout -b feature/your-feature-name
    ```
4. Make your changes and commit them:

    ```bash
    git commit -m "Add your commit message here"
    ```
5. Push your changes to your fork on GitHub:

    ```bash
    git push origin feature/your-feature-name
    ```
6. Open a pull request on the original repository with a clear title and description.

<hr>

## License

This project is licensed under the [License Name] License - see the LICENSE.md file for details.

