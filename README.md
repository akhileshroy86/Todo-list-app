# Front end setup for Noore Todo app

The Noore Todo Application is a simple todo-list management app that allows users to add, edit, delete, and manage their tasks. It features a frontend developed with React and a backend powered by Node.js. This guide will walk you through the setup and configuration process to get the app up and running.

Follow the steps below to set up and run the project locally.

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (>= 20.x)
- **npm** (Node Package Manager)
- Access to the backend repository: [Noore Todo Backend](https://github.com/shashidhar-katkam/noore-todo-backend)
- Setup and run the backend

## Getting Started

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/shashidhar-katkam/noore-todo-frontend.git
cd noore-todo-frontend
npm install
```

### Backend URL Configuration

To configure the backend URL for your application if you any change any in backend setup, follow these steps:

1. Open the file located at:  
   `app\utils\constants.ts`

2. Locate the section where the backend URL is defined.

   ```ts
   export const url = "http://127.0.0.1:4000";
   ```

### Step 3: Run the application

Run the below command to run the application.

```bash
npm run dev
```

That's it. You application is running at http://localhost:3000

Thank you.
