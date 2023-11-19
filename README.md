# BlogApp

BlogApp is a web development project that allows users to sign up and write blogs. It is built using Vite, React, Tailwind CSS, and integrates with Appwrite for user authentication and data storage.

[Live Applcation]()

## Features
- **User Authentication**: Users can sign up and log in securely using Appwrite authentication.

- **Blog Creation**: Authenticated users can create, edit, and delete their blogs.

- **Responsive Design**: The application is designed to be responsive and user-friendly on various devices.

## Technologies Used
- **Vite**: A fast development build tool that supports modern JavaScript features.

- **React**: A JavaScript library for building user interfaces.

- **Tailwind CSS**: A utility-first CSS framework that makes styling and designing the application easy.

- **Appwrite**: An open-source backend server that helps developers build applications faster with built-in authentication, real-time databases, and storage.

## Getting Started
1. **Clone the repository:**
``` javascript
git clone https://github.com/your-username/blogapp.git
```

2. **Install dependencies:**
``` javascript
cd blogapp
npm install
```

3. **Configure Appwrite:**
     - Create an account on Appwrite.
     - Set up a new project and note down your project's API key.
     - Create a web client in your Appwrite project and obtain the API endpoint and client key.
     
4. **Configure the application:**
     -Copy the .env.example file to .env and update the following variables:
      ``` javascript
      VITE_APPWRITE_PROJECT_URL=""
      VITE_APPWRITE_PROJECT_ID=""
      VITE_APPWRITE_DATABASE_ID=""
      VITE_APPWRITE_COLLECTION_ID=""
      VITE_APPWRITE_BUCKET_ID=""
      ```
5. **Run the application:**
``` javascript
npm run dev
```
The application will be accessible at http://localhost:3000.


Acknowledgments
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Appwrite](https://appwrite.io/)
  
Happy blogging! 🚀
