# React + Vite

Overview

This project is a simple and intuitive To-Do List app that allows users to manage their tasks. The app stores the tasks in the browser's local storage, so the tasks remain even after refreshing the page or closing the browser.

Features

Add tasks: Users can input tasks and add them to the list.
Delete tasks: Users can remove tasks that are completed or no longer needed.
Toggle completion: Users can mark tasks as complete or incomplete.
Local storage persistence: Tasks are stored in the browser's local storage, so they are not lost on page refresh or browser closure.
Responsive design: The app is styled with Tailwind CSS to be responsive and accessible across devices.
Tech Stack

React: A JavaScript library for building user interfaces.
Vite: A fast development build tool.
Tailwind CSS: A utility-first CSS framework for styling.
Local Storage: To persist the tasks even after page reloads.

├── public/            # Static assets
├── src/               # Source code
│   ├── components/    # React components (e.g., TodoItem.jsx, Todo.jsx)
│   ├── icons/         # Icons used in the app
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point for the app
│   ├── index.css      # Global CSS (includes Tailwind imports)
├── package.json       # Project metadata and dependencies
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js     # Vite configuration

