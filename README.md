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


### **4. Implementing Components**

- **Action:**
    - **`Header.jsx`**: Created a **header** with a **toggle button** for the sidebar.
    - **`SideNav.jsx`**: Developed a **sidebar** for browsing and searching Pokémon.
    - **`PokeCard.jsx`**: Displayed **detailed Pokémon information**.
    - **`TypeCard.jsx`**: Showcased **Pokémon types with corresponding colors**.
    - **`Modal.jsx`**: Implemented a **modal** to show **move details**.

- **Purpose:**
    - **Break down** the app into **reusable and manageable components** for **better code organization** and **maintenance**.

---


### **5. Styling and Responsive Design**

- **Action:**
    - Styled components using **CSS** to ensure a **clean and modern look**.
    - Used **flexbox** and **grid layouts** for **responsive design**.
    - Applied **color coding** based on **Pokémon types** for visual distinction.

- **Purpose:**
    - Enhance the **user interface** for an **engaging** and **accessible experience** across all devices.

---


### **6. Testing and Deployment**

- **Action:**
    - Tested the app locally using **Netlify CLI (`netlify dev`)**.
    - Connected the **GitHub repository to Netlify** for **continuous deployment**.
    - Deployed the app and verified its functionality on the **live site**.

- **Purpose:**
    - Ensure the app is **reliable** and **accessible** to users by deploying it to a **live environment**.

---


## 🧩 **Main Components**

### **1. `Header.jsx`**

**What It Does:**
- Displays the app's header with a button to toggle the **sidebar navigation**.

**Actions & Purpose:**
- **Toggle Sidebar**: The button allows users to open or close the sidebar for **browsing Pokémon**.
- **Display Title**: Shows the `"Pokédex"` title with a **gradient text effect**.

---


### **2. `SideNav.jsx`**

**What It Does:**
- Provides a sidebar for **browsing and searching** through the first **150 Pokémon**.


**Actions & Purpose:**
- **Search Pokémon**: Users can search for Pokémon by **name** or **Pokédex number**.
- **Select Pokémon**: Clicking on a Pokémon updates the main display to show **detailed information**.
- **Toggle Visibility**: The sidebar can be **opened** or **closed** for **better user experience**.

---


