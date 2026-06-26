# 🏥 MediGo – Full Stack Doctor Appointment Booking Platform

MediGo is a full-stack healthcare appointment booking platform that enables patients to book appointments with doctors, make secure online payments, and manage their appointments. It also includes dedicated Admin and Doctor dashboards for managing doctors, appointments, and profiles.

## 🌐 Live Demo

### 👨‍⚕️ User Website
🔗 https://fahad-medigo.netlify.app

### 🛠️ Admin & Doctor Dashboard
🔗 https://fahad-medigo-dashboard.netlify.app

### ⚙️ Backend API
🔗 https://medigo-nmzl.onrender.com

---

# ✨ Features

## 👤 User

- User Registration & Login
- JWT Authentication
- Browse Doctors by Specialty
- Doctor Profile Page
- Book Appointments
- Razorpay Payment Integration
- Appointment History
- Cancel Appointments
- Update Profile
- Responsive UI

---

## 🛠️ Admin

- Secure Admin Login
- Dashboard Analytics
- Add New Doctors
- Manage Doctors
- View All Appointments
- Toggle Doctor Availability
- Demo Admin Mode (Safe Public Access)

---

## 👨‍⚕️ Doctor

- Secure Doctor Login
- Dashboard Overview
- View Appointments
- Complete / Cancel Appointments
- Update Doctor Profile
- Manage Availability

---

# 🛡 Demo Access

The dashboard includes public demo accounts for recruiters and reviewers.

### Demo Admin

Email

```
demo.admin@medigo.com
```

Password

```
demo123
```

### Demo Doctor

Email

```
demo.doctor@medigo.com
```

Password

```
demo123
```

> Demo accounts simulate updates without modifying production data.

---

# 🧰 Tech Stack

## Frontend

- React.js
- React Router
- Axios
- Tailwind CSS
- React Toastify
- Vite

## Backend

- Node.js
- Express.js
- JWT Authentication
- Multer
- Cloudinary
- Razorpay

## Database

- MongoDB Atlas
- Mongoose

## Deployment

- Netlify (Frontend)
- Netlify (Admin Dashboard)
- Render (Backend)
- MongoDB Atlas
- Cloudinary

---

# 📂 Project Structure

```text
MEDIGO
│
├── 📁 admin
│   ├── 📁 public
│   ├── 📁 src
│   │   ├── 📁 assets
│   │   ├── 📁 components
│   │   ├── 📁 context
│   │   ├── 📁 pages
│   │   ├── 📄 App.jsx
│   │   ├── 📄 main.jsx
│   │   └── 📄 index.css
│   ├── 📄 .env
│   ├── 📄 package.json
│   ├── 📄 vite.config.js
│   └── 📄 README.md
│
├── 📁 backend
│   ├── 📁 config
│   ├── 📁 controllers
│   ├── 📁 middlewares
│   ├── 📁 models
│   ├── 📁 routes
│   ├── 📄 server.js
│   ├── 📄 .env
│   └── 📄 package.json
│
├── 📁 frontend
│   ├── 📁 public
│   ├── 📁 src
│   │   ├── 📁 assets
│   │   ├── 📁 components
│   │   ├── 📁 context
│   │   ├── 📁 pages
│   │   ├── 📄 App.jsx
│   │   ├── 📄 main.jsx
│   │   └── 📄 index.css
│   ├── 📄 .env
│   ├── 📄 package.json
│   ├── 📄 vite.config.js
│   └── 📄 README.md
│
├── 📄 .gitignore
└── 📄 README.md
```

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/hashmifahad182/MediGo.git
```

```
cd MediGo
```

---

## Backend

```
cd backend
npm install
npm start
```

---

## Frontend

```
cd frontend
npm install
npm run dev
```

---

## Admin

```
cd admin
npm install
npm run dev
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=
MONGODB_URI=

JWT_SECRET=

ADMIN_EMAIL=
ADMIN_PASSWORD=

DEMO_ADMIN_EMAIL=
DEMO_ADMIN_PASSWORD=

CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET_KEY=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

---

## Frontend (.env)

```env
VITE_BACKEND_URL=
VITE_RAZORPAY_KEY_ID=
VITE_ADMIN_URL=
```

---

## Admin (.env)

```env
VITE_BACKEND_URL=
```

---

# 📸 Screenshots

Add screenshots here.

- Home Page
  <img width="1577" height="892" alt="image" src="https://github.com/user-attachments/assets/6056042b-f686-4df3-91f9-9a55cef4cdc8" />

- Doctors Page 
- Appointment Booking
- Payment Page
- User Dashboard
- Admin Dashboard
- Doctor Dashboard

---

# 🔮 Future Improvements

- Email Notifications
- Video Consultation
- Prescription Management
- Medical Records
- Patient Reviews
- Appointment Reminders
- Dark Mode

---

# 👨‍💻 Developer

**Fahad Hashmi**

GitHub

https://github.com/hashmifahad182

---

## ⭐ If you found this project helpful, consider giving it a Star!
