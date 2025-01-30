# 🐱‍🏍 **React Pokédex**

## **Hey there! 👋**

Welcome to my **React Pokédex!** This project was built as part of my learning journey in React, following a fantastic tutorial by **smoljames** ([his website](#)). The app showcases the original **150 Pokémon** by fetching data from an external API. Whether you're a **Pokémon fan** or just curious about how to build a React app with API integration, this project is for you!

---


## 🚀 **What It Does**

- **Browse Pokémon**: Explore the first **150 Pokémon** with their images and details.
- **Search Functionality**: Easily find your favorite Pokémon by **name** or **Pokédex number**.
- **View Details**: Click on a Pokémon to see more information, including **stats, types, and moves**.
- **Responsive Design**: Enjoy a smooth experience on both **mobile and desktop** devices.

---


## 🛠️ **Technologies Used**

- **Frontend**: React, JavaScript, CSS
- **State Management**: React Hooks (`useState`, `useEffect`)
- **API Integration**: PokéAPI
- **Deployment**: Netlify
- **Version Control**: GitHub

---


## 🔄 **Workflow Guide: Building the React Pokédex**

---

### **1. Project Setup**
- **Action:**
    - Initialized a new **React project using Vite**.
    - Set up a **GitHub repository** and connected it with **GitHub Desktop** for version control.
    - Organized the project structure with **folders** for components and utilities.

- **Purpose:**
    - Establish a **solid foundation** for the project with **proper version control** and **organized file structure**.

---


### **2. Designing the User Interface**

- **Action:**
    - Created React components:  
        - `Header.jsx`
        - `SideNav.jsx`
        - `PokeCard.jsx`
        - `TypeCard.jsx`
        - `Modal.jsx`
    - Implemented a **responsive layout** using **CSS** to ensure the app looks good on **all devices**.
    - Developed a **sidebar navigation** for browsing Pokémon and a **main area** to display Pokémon details.

- **Purpose:**
    - Provide an **intuitive** and **visually appealing** interface for users to interact with the **Pokédex**.

---


### **3. Fetching Pokémon Data**

- **Action:**
    - Utilized React’s **`useEffect`** to fetch data from the **PokéAPI**.
    - Stored the fetched data in **state variables** using **`useState`**.
    - Implemented **caching with `localStorage`** to reduce redundant API calls.

- **Purpose:**
    - Efficiently retrieve and **manage Pokémon data**, ensuring a **smooth user experience**.

---
