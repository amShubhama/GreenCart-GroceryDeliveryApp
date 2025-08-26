# 🛒 GreenCart – Grocery Delivery App  

GreenCart is a full-stack **E-Commerce Grocery Delivery Application** built with the **MERN stack**.  
It provides a seamless shopping experience for customers and a **Seller/Admin Dashboard** for product & order management.  
Secure payments are integrated using **Stripe**.  

🚀 **Live Demo**: [GreenCart App](https://green-cart-lime.vercel.app/)  
📂 **GitHub Repo**: [GreenCart Repository](https://github.com/amShubhama/GreenCart-GroceryDeliveryApp)  

---

## ✨ Features  

### 👥 Customer Features  
- Browse products by category, price, and offers.  
- Add to cart, update quantities, and checkout securely.  
- Stripe integration for online payments.  
- JWT-based authentication & authorization.  

### 🛍️ Seller/Admin Dashboard  
- Add, update, and delete products with images.  
- Manage categories, offers, and pricing.  
- Track and manage customer orders.  

---

## 🛠️ Tech Stack  

**Frontend (by Ayush)**  
- React.js, Context API, HTML, CSS  
- Vite for bundling  
- Responsive design with reusable components  

**Backend (by Shubham)**  
- Node.js, Express.js, MongoDB  
- Stripe Payment Integration (Payment Intents + Webhooks)  
- JWT Authentication & Middleware Security  
- RESTful APIs for products, users, and orders  

---

## ⚙️ Installation & Setup  

### Clone the repository  
```bash
git clone https://github.com/amShubhama/GreenCart-GroceryDeliveryApp.git
cd GreenCart-GroceryDeliveryApp
Setup Client (Frontend)
cd Client
npm install
npm run dev

Setup Server (Backend)
cd Server
npm install
npm start
```
## Environment Variables

### Create a .env file in /Server with:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

##👨‍💻 Contributors
 **Shubham – Backend Development (Node.js, Express, MongoDB, Stripe, APIs, Authentication)
 **Ayush – Frontend Development (React.js, Context API, Responsive UI)

##📌 Future Improvements
 - Wishlist & Favorites feature
 - Order delivery tracking system
 - Email notifications for orders
