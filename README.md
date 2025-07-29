# FinanzasPRO - Aplicación de Gestión Financiera

## Desarrollado por:
 **## Nombre:** Juseth David Porto Franco
 **## Fecha:** 29/07/2025
 **## Correo:** juseth.porto2@gmail.com


![FinanzasPRO](./assets/images/finanzas.jpg)

FinanzasPRO is an intuitive web application designed to help you take control of your personal finances. Track your income and expenses, classify them by categories and get detailed reports to better understand your spending habits.

---

## Main Features

- **User Registration:** Local authentication system to protect your data.
- **Dashboard:** View your general balance, total income and expenses in one glance.
- **Operation Management:** Add, edit and delete transactions (income or expenses) easily.
- **Customizable Categories:** Create and manage your own categories to organize your finances as you prefer.
- **Detailed Reports:** Analyze your finances with reports by category and by month.
- **Advanced Filters:** Filter your operations by type, category, date or sort them to find what you're looking for.
- **Responsive Design:** Access and manage your finances from any device.

---

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js, Express
- **Database:** Local JSON file for user data.
- **Icons:** Font Awesome for a more visual interface.

---

## Project Structure

The project is organized in a clean and professional way to facilitate maintenance and scalability:

```
/FinanzasPRO
├── server.js           # Backend server
├── package.json        # Project dependencies and scripts
├── index.html          # Main application dashboard
├── login.html          # Login page
├── register.html       # User registration page
├── README.md           # This file
├── db/
│   └── users.json      # User database
├── assets/
│   ├── css/            # Stylesheets
│   │   ├── style.css
│   │   └── stylelogin.css
│   └── images/         # Images and favicon
│       ├── finanzas.jpg
│       └── favicon.ico
└── js/
    ├── auth.js         # Frontend login logic
    ├── register.js     # Frontend registration logic
    └── script.js       # Dashboard main logic
```

---

## How to Start

To run this project locally, you'll need to have Node.js installed. Then, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Jusethporto/Finanzas-PRO.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Finanzas-PRO
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the server:**
    ```bash
    npm start
    ```
    The server will be running at `http://localhost:3002`.

5.  **Open your browser** and go to `http://localhost:3002/login.html`.

6.  **You're ready!** Register a new user or use `admin` / `admin` to start managing your finances.

---

## Author

- **Juseth-dev**

Thank you for using FinanzasPRO!
