# GreenCart – Grocery Delivery Application

GreenCart is a full-stack **E-Commerce Grocery Delivery Platform** built using the **MERN stack**. The application delivers a seamless shopping experience for customers while providing a dedicated **Seller/Admin Dashboard** for product, inventory, and order management. Secure online payments are powered by **Stripe**.

**Live Demo:** [GreenCart App](https://green-cart-lime.vercel.app/)

---

## Key Features

### Customer Features
- Browse products by **category, pricing, and promotional offers**
- Add items to cart, manage quantities, and complete secure checkout
- Secure online payments with **Stripe Integration**
- **JWT-based authentication and authorization** for protected access

### Seller/Admin Dashboard
- Create, update, and delete products with image management
- Manage categories, pricing strategies, and promotional offers
- Monitor, track, and manage customer orders efficiently

---

## Tech Stack

### Frontend *(Developed by Ayush Saini)*
- **React.js** — Dynamic and component-based user interface development  
- **Context API** — Global state management across the application  
- **Vite** — Fast development environment and optimized production builds  
- **HTML5 & CSS3** — Responsive, reusable, and scalable UI design  

### Backend *(Developed by Shubham Kumar Gupta)*
- **Node.js & Express.js** — Scalable backend architecture and API development  
- **MongoDB** — NoSQL database for flexible data management  
- **Stripe Integration** — Secure payment processing using Payment Intents and Webhooks  
- **JWT Authentication & Middleware Security** — Authentication, authorization, and route protection  
- **RESTful APIs** — Backend services for products, users, orders, and business operations  

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/amShubhama/GreenCart-GroceryDeliveryApp.git
cd GreenCart-GroceryDeliveryApp
```

### 2. Setup Frontend

Navigate to the frontend directory, install dependencies, and start the development server.

```bash
cd Client
npm install
npm run dev
```

### 3. Setup Backend

Navigate to the backend directory, install dependencies, and start the server.

```bash
cd Server
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the `Server/` directory and configure the following environment variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

## Contributors

### Shubham Kumar Gupta — Backend Developer
- Designed and implemented the backend architecture using **Node.js, Express.js, and MongoDB**
- Developed **RESTful APIs**, authentication workflows, and middleware security
- Integrated **Stripe Payments** using Payment Intents and Webhooks
- Managed backend business logic, database operations, and server workflows

### Ayush Saini — Frontend Developer
- Developed the frontend application using **React.js** and **Context API**
- Built responsive, reusable, and user-friendly UI components
- Managed client-side state management and interactive user experiences

---

## Future Enhancements

- Wishlist & Favorites functionality
- Real-time order delivery tracking
- Email notifications and order status updates
- Improved analytics and dashboard insights
