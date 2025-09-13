<h1 align="center">Mazer Dashboard</h1>

![Mazer Screenshot](https://user-images.githubusercontent.com/45036724/167523601-9d20fb17-1989-488f-b619-cb53c0db8898.png)

<p align="center">Mazer is an Admin Dashboard Template that can help you develop faster. Made with Bootstrap 5. No jQuery dependency.</p>
<div align="center">

[![All Contributors](https://img.shields.io/github/contributors/zuramai/mazer)](https://github.com/zuramai/mazer/graphs/contributors)
![GitHub last commit](https://img.shields.io/github/last-commit/zuramai/mazer.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/zuramai/mazer)
[![License](https://img.shields.io/github/license/zuramai/mazer.svg)](LICENSE)

</div>

<p align="center">
	<a href="http://zuramai.github.io/mazer/demo">Demo Page</a>&nbsp;&nbsp;&nbsp;
	<a href="http://zuramai.github.io/mazer/docs">Documentation Page</a>&nbsp;&nbsp;&nbsp;
	<a href="https://github.com/zuramai/mazer/blob/main/README_INDONESIAN.md">Indonesian README</a>&nbsp;&nbsp;&nbsp;
</p>


## Installation

### Using a ready-made built (recommended)

Download the latest release from the [releases page](https://github.com/zuramai/mazer/releases "releases page").
Open the index HTML file and explore the source code.

### Building yourself

1. Clone the repository 
```sh
git clone https://github.com/zuramai/mazer
```

2. Install dependencies
```sh
yarn install
# OR
npm install
```

3. Run it locally
```sh
npm run dev
```

4. Open `http://localhost:5173` in your browser


---


# Task 3: Customization & Integration of Mazer Admin Dashboard

This project demonstrates my work on **Task 3**, where I customized and integrated a real-world **Mazer Admin Dashboard** template (Bootstrap 5) and connected it to dynamic data for front-end functionality.

---

## Project Overview

Task 3 required evaluating my ability to **customize a pre-built admin dashboard template** and integrate it with sample data to create a functional front-end interface. The goal was to make the dashboard **responsive, visually appealing, and data-driven**.

---

## Main Steps Involved

1. **Template Setup**
   - Downloaded the **Mazer Admin Dashboard** template.
   - Set up project folders with `index.html`, `user.html`, `assets/css`, `assets/js`, and `data.json`.

2. **Customization**
   - Updated the sidebar, navigation, and cards to reflect a realistic admin dashboard.
   - Modified tables, buttons, and footer styling using **Bootstrap 5 classes** only.
   - Removed unnecessary default styles from the template.

3. **Dynamic Data Integration**
   - Created a `data.json` file to store sample users.
   - Wrote `custom.js` to fetch JSON data and populate tables dynamically.
   - Connected data to tables, dashboard cards, and widgets.

4. **Testing & Debugging**
   - Verified dynamic table population.
   - Ensured all UI elements are **responsive** on desktop, tablet, and mobile.
   - Fixed JavaScript selector errors and path issues.

---

## Expected Outcome

- A **fully responsive admin dashboard** with a dynamic user table.
- Sidebar, cards, and footer correctly customized.
- Tables and charts populated from JSON data.
- Smooth and visually appealing interface using Bootstrap 5 utilities.

---

## Technology Stack

- **Front-end**: HTML5, CSS3 (Bootstrap 5), JavaScript
- **Template**: Mazer Admin Dashboard (Open-source Bootstrap 5)
- **Data Source**: `data.json` (sample user data)
- **Development Tools**: VS Code, Live Server, Browser

---

## How I Completed the Task

1. **Project Setup**
   - Installed Mazer template and structured the project folders.
   - Added `user.html` for the dynamic user table.

2. **Bootstrap Integration**
   - Converted tables and cards to use **Bootstrap 5 classes**.
   - Removed all custom CSS to rely on Bootstrap utilities for responsiveness and styling.

3. **Dynamic Table Implementation**
   - Created `data.json` with sample users.
   - Wrote `custom.js` to fetch JSON and populate the table using `innerHTML` and DOM methods.

4. **Testing**
   - Ensured table updates dynamically without page reload.
   - Verified all UI elements adapt to different screen sizes.

---

## Challenges & Solutions

| Challenge | Solution |
|-----------|---------|
| `tbody` element not found | Added `id="usersTable"` to `<tbody>` and corrected JS selector. |
| Bootstrap styling conflicts | Removed inline styles and used only Bootstrap 5 classes. |
| Fetching JSON locally | Used Live Server to bypass CORS restrictions in local files. |
| Maintaining template integrity | Only customized specific sections (sidebar, tables, cards) without breaking the template. |

---

## Time Taken

- Total: **6 hours**

---

## Final Outcome

- Fully functional **Mazer admin dashboard** customized to project needs.
- Dynamic user table with data from `data.json`.
- Responsive, modern UI using Bootstrap 5.
- Clean, organized project structure for scalability.

---

## Setup

### Steps

1. **Clone the project**
   ```bash
   git clone <repository-url>
   cd mazer-task3

2. **Open Live Server**
    Open index.html or user.html using VS Code Live Server or any static server.

3. **View Dashboard**
    Dynamic tables and cards should populate automatically.

---

**Project Structure**

```
mazer-task3/
│
├── index.html                      # Dashboard homepage
├── user.html                       # Dynamic user table
├── data.json                       # Sample data for users
├── assets/
│   ├── css/
│   │   └── bootstrap.min.css
│   └── js/
│       ├── custom.js               # Fetches data and populates tables
│       └── bootstrap.bundle.min.js
├── README.md                       # Project documentation
└── node_modules/                   # (if using npm or Vite)
```
