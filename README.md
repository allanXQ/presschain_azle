# PressChain

## Description

**PressChain** is a decentralized journalist platform built on the **Internet Computer Protocol (ICP)**. It provides a secure and transparent environment where journalists can register, manage their profiles, submit articles, retrieve published articles, and engage in a peer-review process.

## Features

### User Registration and Authentication

- **Secure Sign-Up/Sign-In:** Journalists use a secure authentication process, leveraging the intrinsic security features of the Internet Computer.

### Profile Management

- **Customizable Profiles:** Journalists can add personal information, enhancing their public profiles for readers and peer reviewers.

### Article Submission

- **Decentralized Publishing:** Articles are stored immutably on the blockchain, ensuring permanence and resistance to tampering.

### Article Retrieval

- **Search and Access:** Enables quick access to articles based on journalist names or content keywords.

### Article Review

- **Peer Review System:** Allows journalists to submit articles for peer review, promoting quality and credibility in published content.
- **Feedback and Revisions:** Journalists receive constructive feedback, which they can use to revise and improve their articles before final publication.

### User Management

- **Administrative Controls:** Allows for the management of journalist profiles and articles.

## Benefits

### Enhanced Credibility

- **Peer Review:** Adds a layer of validation, increasing the credibility of the articles and the journalists who write them.

### Improved Article Quality

- **Constructive Feedback:** Helps journalists refine their writing, ensuring that only high-quality content is published.

### Community Engagement

- **Collaborative Environment:** Fosters a sense of community as journalists engage with each other’s work.

### Transparency

- **Visible Revisions:** Changes and feedback are tracked transparently, showcasing the development of each article.

### Security and Integrity

- **Immutable Storage:** Articles and reviews are stored on the Internet Computer, making the data tamper-proof and permanently accessible.

### Censorship Resistance

- **Freedom of Speech:** Journalists can publish without fear of suppression or editorial bias, crucial for maintaining the integrity and truthfulness of journalistic content.
- **Resistance to External Pressure:** The platform's decentralized nature minimizes the potential for governmental or corporate interference.

### Monetization Opportunities

- **Direct Earnings:** Allows journalists to establish direct financial relationships with their readers, bypassing traditional advertising and subscription models dominated by major corporations.
- **Flexible Revenue Models:** Supports various monetization strategies to suit different types of content and audience engagement.

## Technical Overview

### Backend

The backend is built using **Azle**, a TypeScript framework for the Internet Computer which compiles to Motoko. It defines the business logic and data management handled by canisters deployed on the ICP network.

### Canisters

- **Journalist Canister:** Handles operations related to user management (registration, updates, deletion) and article management (submission, retrieval).

### Frontend

The frontend is built using **React** and **Material-UI**, providing a responsive user interface for interacting with the backend services deployed on the ICP.

- **React:** Manages the UI components and user interactions.
- **Material-UI:** Used for designing a polished material-themed user interface.

## Getting Started

### Prerequisites

- **DFINITY Canister SDK:** Required to build and deploy canisters.
- **Node.js:** Required to run the frontend application.
- **NPM:** Recommended for managing JavaScript dependencies.

### Installation

Clone the repository:

```bash
git clone https://github.com/your-repository/journalist-platform.git
cd journalist-platform
```

#### Set up the Backend

Navigate to the backend directory and install dependencies:

```bash
cd backend
dfx start --background
dfx deploy
```

#### Set up the Frontend

Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
yarn install
yarn start
```

The frontend should now be running and accessible at `http://localhost:3000`.

### Usage

After logging into the platform, journalists can manage their profiles, submit new articles, and view articles submitted by other journalists. Users can register new accounts through the registration page.

---
