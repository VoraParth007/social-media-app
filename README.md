# 👥 Social Media App (Backend + Views)

A simple social media web application built with **Node.js**, **Express.js**, **MongoDB**, **JWT Authentication**, and **EJS** for templating. Users can register, log in, upload profile pictures, create posts, like/unlike posts, and edit their content.

---

## 🚀 Features

- 🔐 User Authentication (Register / Login / Logout)
- 👤 Profile View with Post Feed
- 🖼️ Upload Profile Picture (via Multer)
- 📝 Create, Edit, Like & Delete Posts
- 🍪 JWT-based Authentication via Cookies
- 🧩 MVC Folder Structure (Controllers, Routes, Models, Views)

---

## 🛠 Tech Stack

| Tech           | Description                |
|----------------|----------------------------|
| Node.js        | JavaScript runtime         |
| Express.js     | Server framework           |
| MongoDB + Mongoose | NoSQL Database + ODM     |
| EJS            | Templating engine          |
| JWT            | JSON Web Token for Auth    |
| Bcrypt         | Secure Password Hashing    |
| Multer         | Middleware for File Upload |
| Cookie-Parser  | Handle Cookies             |

---

## 📂 Folder Structure




## 🔐 API Endpoints

### 🔸 Auth Routes `/auth`

| Method | Endpoint         | Description                   |
|--------|------------------|-------------------------------|
| `GET`  | `/auth/login`    | Render login page             |
| `POST` | `/auth/login`    | Login user                    |
| `POST` | `/auth/register` | Register new user             |
| `GET`  | `/auth/logout`   | Logout and clear token cookie |

---

### 🔸 User Routes `/profile`

| Method | Endpoint              | Description                     |
|--------|-----------------------|---------------------------------|
| `GET`  | `/profile`            | View user profile (protected)   |
| `GET`  | `/profile/upload`     | Render image upload page        |
| `POST` | `/profile/upload`     | Upload/change profile picture   |

---

### 🔸 Post Routes `/post`

| Method | Endpoint         | Description                 |
|--------|------------------|-----------------------------|
| `POST` | `/post`          | Create a new post           |
| `GET`  | `/like/:id`      | Like/unlike a post          |
| `GET`  | `/edit/:id`      | Render edit post form       |
| `POST` | `/edit/:id`      | Update a post               |
| `GET`  | `/delete/:id`    | Delete a post               |

---



---

## 🔐 API Endpoints

### 🔸 Auth Routes `/auth`

| Method | Endpoint         | Description                   |
|--------|------------------|-------------------------------|
| `GET`  | `/auth/login`    | Render login page             |
| `POST` | `/auth/login`    | Log in user                   |
| `POST` | `/auth/register` | Register new user             |
| `GET`  | `/auth/logout`   | Logout and clear token cookie |

---

### 🔸 User Routes `/profile`

| Method | Endpoint           | Description                   |
|--------|--------------------|-------------------------------|
| `GET`  | `/profile`         | View user profile (protected) |
| `GET`  | `/profile/upload`  | Render image upload form      |
| `POST` | `/profile/upload`  | Upload/change profile picture |

---

### 🔸 Post Routes `/post`

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| `POST` | `/post`          | Create a new post     |
| `GET`  | `/like/:id`      | Like or unlike a post |
| `GET`  | `/edit/:id`      | Render edit post form |
| `POST` | `/edit/:id`      | Update a post         |
| `GET`  | `/delete/:id`    | Delete a post         |

---

## 🧪 Testing Instructions

You can test the app using **Postman** or directly from the browser (since views are rendered using EJS):

- `/register` — Register a new user
- `/login` — Log in the user
- `/profile` — View your profile and posts
- `/post` — Create a new post
- `/profile/upload` — Upload or update your profile picture

---

## 🛠️ Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/VoraParth007/social-media-app.git

# 2. Navigate into the project directory
cd social-media-app

# 3. Install dependencies
npm install

# 4. Create a .env file and configure it
# Example .env:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/social-media
# JWT_SECRET=your_jwt_secret

# 5. Start the server
npm run start


🧑‍💻 Author
Name : Parth vora
GitHub: https://github.com/VoraParth007/

