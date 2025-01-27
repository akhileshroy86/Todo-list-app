<<<<<<< HEAD
# Todo-list-app
=======
# Front end setup for Noore Todo app

The  Todo Application is a simple todo-list management app that allows users to add, edit, delete, and manage their tasks. It features a front-end and back-end developed with Nextjs. This guide will walk you through the setup and configuration process to get the app up and running.

Follow the steps below to set up and run the project locally.

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (>= 20.x)
- **npm** (Node Package Manager)


## Getting Started

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/akhileshroy86/Todo-list-app.git
cd Todo-list-app
npm install
```

### Backend URL Configuration

To configure the backend URL for your application if you any change any in backend setup, follow these steps:

1. Open the file located at:  
   `pages/api/task.ts`

2. open the file located at:
     `pages/api/libs/mongodb.ts`
     and add your mongodb url here 

### Step 3: Run the application

Run the below command to run the application.

```bash
npm run dev
```

That's it. You application is running at http://localhost:3000

Thank you.
>>>>>>> 746a56d (first commit)
