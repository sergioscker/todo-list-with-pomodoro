# 📋 Todo List with Pomodoro

This is a web application that combines a To-Do List with the Pomodoro technique to boost productivity. It allows users to organize their tasks and manage their time using 25-minute work cycles interspersed with 5-minute breaks.

## 🚀 Technologies Used

- **React** 19
- **Vite** as the build tool
- **Tailwind CSS v4** for styling
- **React Query (@tanstack/react-query)** for asynchronous state management
- **React Hook Form** for form management
- **Yup** for form validation
- **Lucide-react** for icons
- **React Toastify** for notifications
- **Jest and Testing Library** for automated testing

## 🎯 Features

- Add, remove, and mark tasks as completed
- Start and pause Pomodoro cycles
- History of completed cycles
- Visual indication of remaining time
- Data persistence in localStorage
- Notifications for cycle start and end

## 🛠️ Installation and Execution

To run the project locally, follow the steps below:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/todo-list-project.git
   ```
2. Navigate to the project directory:
   ```sh
   cd todo-list-project
   ```
3. Install dependencies:
   ```sh
   yarn install
   ```
4. Start the development server:
   ```sh
   yarn dev
   ```

The application will be available at `http://localhost:5173/`.

## 🧪 Testing

The project includes automated tests using **Jest** and **Testing Library** to ensure code quality and application usability.

To run the tests, use the command:
```sh
yarn test
```

The tests are configured to run continuously in `watchAll` mode, enabling an agile development flow.

## 📂 Project Structure

```
📂 todo-list-project
├── 📂 src
│   ├── 📂 components  # Reusable components
│   ├── 📂 hooks       # Custom hooks
│   ├── 📂 lib         # Libraries and utilities
│   ├── 📂 pages       # Main pages
│   ├── 📂 tests       # Test files
│   ├── index.css     # Global styles
│   ├── main.jsx      # Entry point
├── 📂 public         # Public files
├── 📜 .gitignore
├── 📜 .prettierrc.json
├── 📜 components.json
├── 📜 eslint.config.js
├── 📜 index.html
├── 📜 jest.config.js
├── 📜 jsconfig.json
├── 📜 package.json
├── 📜 README.md
├── 📜 vite.config.js
└── 📜 yarn.lock
```

## 📜 License

This project is licensed under the MIT License. Feel free to contribute and improve the project!

---

_Developed with dedication to boost your productivity!_ 🚀

