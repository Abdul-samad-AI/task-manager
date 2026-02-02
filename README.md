---

# 📝 Task Manager App

### Full Stack Web Application (Frontend – Phase 1)

<p align="center">
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png" width="70" />
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png" width="70" />
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/axios/axios.png" width="70" />
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/api/api.png" width="70" />
</p>

---

## 🚀 Project Overview

The **Task Manager App** is a full-stack web application being developed in **phases**, following **industry-standard engineering practices**.

This repository currently represents **Phase 1 – Frontend Foundation**, where the focus is on:

* Real API communication
* Professional React state handling
* Production-ready UI behavior

> 🔧 **Backend (Django REST API) will be integrated in the next phase.**

---

## 🎯 Current Phase: Frontend API Integration (Completed till Day 3)

In this phase, the application demonstrates how a real frontend communicates with a backend using APIs.

### ✅ What’s Implemented

✔ Login UI with controlled inputs
✔ API call using Axios (`POST` request)
✔ Proper handling of loading state
✔ Error handling without UI crash
✔ Clean async/await pattern
✔ Button disabling during API calls
✔ Console-verified success response

This reflects **real-world frontend engineering**, not tutorial-level code.

---

## 🧠 Core Concept Demonstrated

```text
Browser (React)
   ↓
HTTP Request (Axios)
   ↓
API Endpoint
   ↓
JSON Response
   ↓
React State Update
   ↓
UI Feedback (Success / Error)
```

This exact flow will later be reused with a **Django backend**.

---

## 🖥️ Tech Stack (Current Phase)

* **React.js**
* **JavaScript (ES6+)**
* **Axios**
* **HTML5**
* **CSS3**
* **Git & GitHub**

---

## 🔐 Login Flow (Frontend)

* User enters email & password
* Axios sends a POST request
* Loading indicator is shown
* Button is disabled during request
* API response is handled safely
* UI never crashes on failure

> 🔹 A dummy API is currently used **only to demonstrate frontend logic**
> 🔹 This will be replaced with a **Django authentication API**

---

## 📸 UI Preview (Sample)

<p align="center">
  <img src="https://user-images.githubusercontent.com/674621/171798702-bfdc99b6-0c7b-4c5b-9e6c-6c1c1b8e48aa.png" width="650" />
</p>

*(Image for representation purposes – UI styling will evolve)*

---

## 📂 Project Structure (Simplified)

```text
src/
 ├── pages/
 │   ├── Login.jsx
 │   └── Dashboard.jsx (upcoming)
 ├── App.js
 └── index.js
```

---

## 🧪 How to Run Locally

```bash
npm install
npm start
```

Open in browser:

```
http://localhost:3000
```

---

## 📌 What Recruiters Should Notice

* Uses **real API call patterns**
* Handles **loading and error states professionally**
* Clean separation of logic and UI
* Scalable structure ready for backend
* Built step-by-step with clear learning progression

This project is intentionally developed **phase-wise** to reflect **real software development workflows**.

---

## 🛣️ Roadmap

* [x] Frontend API integration
* [x] Login flow with UI feedback
* [ ] Django REST backend
* [ ] JWT authentication
* [ ] Task CRUD APIs
* [ ] Protected dashboard routes

---

## 👨‍💻 Author

**Abdul Samad**
B.Tech (AI / ML)
Aspiring Full Stack Developer

🔗 GitHub: *add your GitHub profile link here*

---

## ⭐ Final Note

This repository focuses on **quality fundamentals** rather than rushing features.
Each phase is built with **job-readiness and scalability** in mind.

---