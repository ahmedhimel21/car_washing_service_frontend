# # AquaClean

[Live URL](https://car-washing-service.vercel.app)

The Car Wash Booking System frontend is a user-friendly web application designed to simplify the car wash booking process. It features a Home Page with easy navigation, a hero section, and a quick booking call-to-action. Users can sign up or log in securely, browse and filter services, view detailed service information, and book time slots directly through the Service Details pages. The Admin Dashboard allows administrators to manage services, slots, and users. The User Dashboard provides personalized booking history.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [APIs](#apis)
- [Technologies](#technologies)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmedhimel21/car_washing_service_frontend
   cd your-repo-name/frontend
   ```
2. Install dependencies::
   ```bash
   npm install
   or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   or
   yarn run dev
   The app should now be running on http://localhost:5173.
   ```

### Usage

1. Browse Services: Users can navigate to the "Services" page to view and filter available services.
2. Book a Service: Select a service, choose an available time slot, and proceed with booking via AAMARPAY.
3. User Authentication: Sign up or log in to manage bookings and leave reviews.
4. Admin Dashboard: Admin users can manage services, bookings, and user roles

### Features

#### 1. Home Page

- Navigation Menu: Links to Services, Booking, Login, and more.
- Hero Section: Branding message with a call-to-action button that redirects users to the Services page.
- Featured Services: Highlights up to six services with descriptions and images.
- Review Section: Star-based rating system and feedback input. Shows the site's average rating and recent reviews.
- Black Overlay for Reviews: If a user is not logged in, a black overlay appears with a "Login" button.
- Footer: Links to relevant pages and social media.

#### 2. Services Page

- Displays a list of all available car wash services.
- Includes search, filter, and sort options (e.g., by price, duration).

#### 3. Service Details Page

- Displays detailed information about a selected service.
- Available time slots are shown for the current date (booked slots are disabled).
- Users can select a slot and book the service directly.

#### 4. Booking Page

- Displays the selected service and time slot.
- Includes a form for submitting user information (auto-filled with selected slot).
- "Pay Now" button redirects users to AAMARPAY for payment processing.

#### 5. Admin Dashboard

- Service Management: Add, update, delete services. Manage slots (available/cancelled).
- User Management: View users and update their roles.
- Booking Overview: View recent bookings and manage bookings.

#### 6. User Dashboard

- Profile Management: Update personal information and view booking history.
- Upcoming Bookings: Displayed with a countdown timer.

#### 7. Review Section

- Users can leave reviews with star ratings.
- Non-logged-in users see an overlay prompting them to log in.

#### 8. Responsive Design

Built with Tailwind CSS and Antd for a mobile-first experience.

### APIs

This frontend interacts with the backend APIs to fetch product data, manage cart operations. Refer to the backend repository for detailed API documentation.
[Backend Repository](https://github.com/ahmedhimel21/car_washing_service_backend)

### Technologies

- React: Frontend library for building the user interface.
- Redux: State management for global data.
- RTK Query: Simplified data fetching.
- React Router DOM: Manages routing for the app.
- Tailwind CSS & DaisyUI: For responsive and modern UI components.
- Ant Design: Component library used in dashboards and forms.
- TypeScript: Ensures type safety in the codebase.
- Zod: Schema validation for form data.
- Express: Backend framework.
- Mongoose: ODM for MongoDB.
- AAMARPAY: Payment gateway integration for booking payments.
- redux-persist: to persist redux local state to local storage
- sonner: showing toast
