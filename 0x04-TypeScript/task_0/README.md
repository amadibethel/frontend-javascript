# 📘 Task 0: Student Interface with TypeScript

This project is part of the **0x04-TypeScript** module in the `frontend-javascript` repository.  
It demonstrates how to use **TypeScript interfaces** and **Vanilla JavaScript** DOM manipulation to render student data in a table.

---

## 📂 Project Structure

frontend-javascript/
└── 0x04-TypeScript/
└── task_0/
├── js/
│ └── main.ts
├── package.json
├── .eslintrc.js
├── tsconfig.json
├── webpack.config.js
└── README.md


---

## Task Description

- Create a **TypeScript interface** named `Student` with the following fields:
  - `firstName` (string)
  - `lastName` (string)
  - `age` (number)
  - `location` (string)

- Create **two student objects** and store them in an array called `studentsList`.

- Using **Vanilla JavaScript**, dynamically render a table on the webpage:
  - Each row should display the student's **first name** and **location**.

- Ensure:
  - TypeScript is used wherever possible.
  - Webpack compiles with **no type errors**.

---

## Setup & Installation

1. **Navigate into the project directory**
   ```bash
   cd frontend-javascript/0x04-TypeScript/task_0

## Install Independancies

```bash
npm install

## Build the project

```bash
npm run build

## Run with webpack-dev-server (if configured)

```bash
npm start


