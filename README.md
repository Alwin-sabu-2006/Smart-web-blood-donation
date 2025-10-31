# Smart Blood Donation Platform



## 📖 Project Overview
This project Idea  and basic foundation was developed by me and my friends for a Hackathon ,but later i decided to extend the project in my own way making more and more changes to it.

**Medi Minds** is a modern, web-based platform designed to efficiently and reliably connect blood donors with patients in need. Built with a user-centric approach, the application provides a secure and intuitive interface for posting blood requests, finding compatible donors, and managing the donation process from start to finish. The system ensures timely assistance during emergencies while prioritizing donor safety and data privacy.

The core of the platform is a robust workflow that automates scheduling, enforces a mandatory 3-month cooldown period for donors, and facilitates clear communication between all parties, including a comprehensive admin dashboard for user verification and system oversight.

---

## ✨ Key Features

### For Donors & Patients:
*   **👤 Secure Authentication:** Safe and easy registration and login for all users.
*   **🏠 Personalized Dashboard:** A central hub to access all key features like finding donors, requesting blood, and checking eligibility.
*   **🔍 Advanced Donor Search:** Filter available donors by blood group and city to find a compatible match quickly.
*   **📢 Public Blood Requests:** Post a detailed request that becomes visible to all eligible donors on the platform.
*   **💬 Integrated Notifications:** A secure, in-app inbox for all communications, ensuring user contact details remain private.
*   **🗓️ Automated Scheduling:** A mandatory scheduling system ensures every donation request has a proposed date and time from the outset.
*   **🔄 Appointment Management:** View all scheduled, completed, and cancelled appointments on a dedicated profile page. Both donors and requesters can cancel appointments, with automatic notifications sent to the other party.
*   **✅ Donor Verification:** A simple process for donors to submit an ID for verification, building trust within the community.
*   **🛡️ Safety Cooldown:** An automated 3-month cooldown period is enforced after a confirmed donation, protecting donor health.
*   **❓ Eligibility Checker:** An interactive questionnaire to help potential donors check their eligibility before registering.
*   **🏥 Hospital & Blood Bank Locator:** Find nearby hospitals and blood banks and view their current blood stock levels.

### For Administrators:
*   **📊 Admin Command Center:** A dedicated dashboard with key statistics, including total users, pending verifications, and active requests.
*   **✅ Verification Queue:** Admins can review pending donor verifications, view submitted documents, and approve or reject them.
*   **👑 Admin Access Control:** A primary admin can review and grant admin privileges to other users.
*   **📋 Full User Roster:** View and manage a list of all registered users on the platform.

---

## 🛠️ Technology Stack

*   **Frontend Framework:** React
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Routing:** React Router
*   **Date & Time Management:** date-fns
*   **State Management:** React Context API & In-Memory Store (`data/store.ts`)
*   **Icons:** Heroicons (custom components)

---

## ⚙️ Core Workflows

The platform's logic is built around a secure and consistent donation process.

### 1. The Donation Cycle

A donation can be initiated in two primary ways, but both converge into the same standardized, schedule-first workflow.

**Path A: Requester Finds a Donor**
1.  A user logs in and navigates to the "Find Donors" page.
2.  They filter for a specific blood group and city.
3.  From the list of available, verified donors, they click "Contact Donor".
4.  A modal appears, requiring the requester to **propose a specific date and time** for the donation.
5.  Upon submission, a donation request with a `SCHEDULED` status is created, and the donor receives a notification in their inbox.

**Path B: Donor Responds to a Request**
1.  A registered donor logs in and visits the "Active Requests" page.
2.  They find a request they can fulfill and click "Offer to Help".
3.  A modal appears, requiring the donor to **propose a specific date and time** for the donation.
4.  Upon submission, a donation request with a `SCHEDULED` status is created, and the requester receives a notification.

### 2. Confirmation & Cooldown Enforcement

This is a critical, requester-driven step to ensure the system's integrity.
1.  After the scheduled appointment time has passed, the "Confirm Receipt" button becomes active on the **requester's** profile page for that specific appointment.
2.  The requester clicks the button to confirm the donation was successful.
3.  This action triggers two system events:
    *   The appointment status is changed to `COMPLETED`.
    *   The **donor's `lastDonationDate` is automatically updated**, officially starting their 3-month cooldown period.
4.  The donor is now marked as unavailable for new requests until the cooldown period is over.

### 3. Appointment Cancellation
*   Either the donor or the requester can cancel a `SCHEDULED` appointment from their profile page.
*   The system updates the appointment status to `CANCELLED` and sends a single, targeted notification to the other party, ensuring clear communication.

---

## 📂 Project Structure

The project follows a standard React application structure:

```
/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components (Header, Footer, Modal, etc.)
│   │   ├── icons/
│   │   └── *.tsx
│   ├── pages/            # Top-level page components for each route
│   │   └── *.tsx
│   ├── data/
│   │   └── store.ts      # Mock data store and data management functions
│   ├── types.ts          # TypeScript type definitions
│   ├── constants.ts      # Mock data arrays and constant values
│   ├── App.tsx           # Main component with routing and context providers
│   └── index.tsx         # Application entry point
├── index.html            # Main HTML file
└── metadata.json         # Application metadata
```

---

## ✍️ Author
This project was conceptualized and developed by **Alwin Sabu** as part of the Medi Minds initiative.

