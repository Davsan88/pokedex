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


### **3. `PokeCard.jsx`**

**What It Does:**
- Displays **detailed Pokémon information**, including **stats, types, and moves**.

**Actions & Purpose:**
- **Fetch Pokémon Data**: Retrieves data from the **PokéAPI** and caches it.
- **Display Stats & Types**: Shows the **Pokémon's stats and types**.
- **Show Moves**: Lists **available moves** and integrates with the **modal**.

---


### **4. `TypeCard.jsx`**

**What It Does:**
- Displays **Pokémon type** with **corresponding colors**.

**Actions & Purpose:**
- **Visual Representation**: Each type is **color-coded** to match **Pokémon aesthetics**.

---


### **5. `Modal.jsx`**

**What It Does:**
- Creates a **modal** to display **move details**.

**Actions & Purpose:**
- **Display Move Details**: Shows the **name** and **description** of a Pokémon’s move.
- **Close Modal**: Allows users to **close the modal** and return to the **main interface**.

---


## 🎨 **Usage**

---

### **Browse Pokémon**
- Use the **sidebar** to browse through the first **150 Pokémon** by **name** or **Pokédex number**.

### **Search Pokémon**
- Use the **search bar** in the sidebar to quickly find a **specific Pokémon**.

### **View Details**
- Click on a Pokémon to view **detailed information**, including **stats, types, and moves**.

### **Explore Moves**
- Click on any **move** to see its **description in a modal window**.

---


## 💡 **Skills Learned**

- **React State Management**: Using `useState` and `useEffect` to manage dynamic data and side effects.
- **API Integration**: Fetching data from external APIs and handling responses.
- **Component Architecture**: Breaking down the app into **reusable and manageable components**.
- **Responsive Design**: Implementing **responsive layouts** with **CSS** to ensure the app looks good on **all devices**.
- **Local Storage Caching**: Using `localStorage` to cache API responses and **reduce redundant network requests**.
- **Modal Implementation**: Creating **modals using React Portals** for displaying **additional information**.
- **Search Functionality**: Implementing **search and filter features** to enhance **user experience**.
- **Deployment**: Deploying **React applications** using **Netlify** for seamless hosting and **continuous deployment**.
- **Version Control**: Managing **code changes** and **collaboration** using **GitHub**.

---


## **Installation**

1. **Clone the Repository:**

```bash
git clone https://github.com/yourusername/react-pokedex.git
cd react-pokedex
```

2. **Install Dependencies:**

```bash
npm install
```

3. **Run the App Locally:**

```bash
npm run dev
```

- Open your browser and go to **`http://localhost:3000`** (or the port specified) to see the app in action.

---


## 🌐 **Deployment**

### **Deploy to Netlify**

1. **Push Your Code to GitHub:**

    - Use **GitHub Desktop** or the **command line** to commit and push your latest changes.

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Link GitHub to Netlify:**

    - Log in to your **Netlify account**.
    - Click on **"New site from Git"** and select **GitHub** as the provider.
    - Authorize **Netlify** to access your **GitHub repositories**.
    - Select the **`react-pokedex`** repository.


3. **Set Up Build Settings:**

 - **Build Command**: `npm run build`
 - **Publish Directory**: `dist`
 - **Environment Variables**: Add any **necessary environment variables** if applicable.

4. **Deploy:**

 - Click **"Deploy site"** and wait for **Netlify** to build and deploy your app.
 - Once done, you'll get a **live URL** to share with friends and family!

---


### **Verify Deployment**

1. **Access Your Live Site:**

    - Netlify will provide a **default subdomain** (e.g., `react-pokedex.netlify.app`).  
    - You can **customize this later** if you wish.


---