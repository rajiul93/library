# Library — Book borrowing & management web app

## Overview

A **React**-based library management web application. Users can add books, update or delete their own listings, **borrow** books, and **return** them when finished. It includes **Firebase Authentication** (email/password and Google), **dark/light mode**, category browsing, and protected routes for a complete frontend experience.

<p align="center">
  <img src="./public/logoo.png" alt="Library app logo / preview" width="420" />
</p>


---

## Main technologies

| Layer | Stack |
|-------|--------|
| **UI** | React 18, Vite |
| **Styling** | Tailwind CSS, DaisyUI |
| **Routing** | React Router DOM v6 |
| **Auth & backend** | Firebase (Auth, etc.) |
| **HTTP** | Axios |
| **Forms & interaction** | React Hook Form, Swiper, Lottie React |
| **Notifications / feedback** | React Toastify, React Hot Toast, SweetAlert2, SweetAlert |
| **Other** | React Helmet Async, React Datepicker, React Icons, React Rating |

---

## Main features

- **Firebase authentication:** Sign in / sign up with email/password and Google  
- **Book CRUD:** Signed-in users can **add, update, and delete** their own posted books  
- **Borrow & return:** Any user can **borrow** a book and **return** it after reading  
- **My books / borrowed lists:** Dedicated routes for your posted books and **borrowed** books  
- **Categories:** Browse books by category  
- **All books:** All books in one place (table/list style)  
- **Dark and light mode**  
- **Protected routes:** Sensitive pages require authentication  

---

## Dependencies

### Production (`dependencies`)

`axios`, `firebase`, `localforage`, `lottie-react`, `match-sorter`, `react`, `react-datepicker`, `react-dom`, `react-helmet-async`, `react-hook-form`, `react-hot-toast`, `react-icons`, `react-rating`, `react-router-dom`, `react-toastify`, `sort-by`, `sweetalert`, `sweetalert2`, `swiper`

### Development (`devDependencies`)

`@vitejs/plugin-react`, `vite`, `tailwindcss`, `daisyui`, `postcss`, `autoprefixer`, `eslint` and React-related ESLint plugins, `@types/react`, `@types/react-dom`

For exact versions, see [`package.json`](./package.json).

---

## Running locally

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended, typically v18+)
- [pnpm](https://pnpm.io/) (specified as `packageManager` in this project) — or use `npm` / `yarn` for `install` if you prefer

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/rajiul93/library.git
   cd library
   ```

2. **Install packages**

   ```bash
   pnpm install
   ```

   (`npm install` or `yarn` works too; the scripts stay the same.)

3. **Firebase environment variables**

   Create a `.env` file in the project root with your Firebase config (Vite requires the `VITE_` prefix):

   ```env
   VITE_API_KEY=your_api_key
   VITE_AUTH_DOMAIN=your_auth_domain
   VITE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_storage_bucket
   VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_APP_ID=your_app_id
   ```

   Copy values from Firebase Console → Project settings → Your apps.

4. **Start the dev server**

   ```bash
   pnpm dev
   ```

   Open `http://localhost:5173` in the browser (or whichever port the terminal prints).

5. **Production build & preview (optional)**

   ```bash
   pnpm build
   pnpm preview
   ```

---

## Live & relevant links

| Resource | Link |
|----------|------|
| **Live demo (Netlify)** | [https://libraryan.netlify.app](https://libraryan.netlify.app) |
| **Source code (GitHub)** | [https://github.com/rajiul93/library](https://github.com/rajiul93/library) |

### Optional demo login (testing)

Example account previously used to test all-books and similar pages (demo only; do not rely on this in production):

- **Email:** `xyz@gmail.com`  
- **Password:** `aaaaaA`

---

## License & contributing

Follow any `LICENSE` or contributing guidelines added to the repository. Open an issue on GitHub if you have questions.
