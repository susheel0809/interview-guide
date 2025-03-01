# Interview Practice Application

## Overview

This project is an interview practice platform designed to help users prepare for technical interviews. The application offers various features, including **mock interviews** with real or AI-driven interviewers. Users can practice answering coding, behavioral, and system design questions, receiving detailed feedback after each interview session. This platform aims to provide a more immersive and realistic interview simulation experience.

---

## Features

### 1. **Mock Interviews with Real or AI Interviewers**

- **Real Interviewers**: Participate in mock interviews with experienced interviewers who will ask coding, behavioral, and system design questions. After the interview, you will receive detailed feedback on your performance, highlighting strengths and areas for improvement.
  
- **AI-Driven Interviews**: If you prefer practicing with AI, the application offers AI-powered mock interviews. These interviews simulate real interview scenarios and ask questions based on the selected subject (e.g., Spring Boot, Java, Python, etc.). The AI will provide feedback based on your answers, guiding you through your performance.

### 2. **Subject Selection**
- Choose from a variety of programming languages and frameworks such as **Java**, **Spring Boot**, **Python**, and more.
- The platform generates random questions based on the selected subject, allowing you to practice in a focused manner.

### 3. **Detailed Feedback**
- After each mock interview, users will receive feedback on their responses, including:
  - How well they answered the question
  - Areas of improvement
  - Suggested resources for further learning

### 4. **Responsive and User-Friendly Design**
- The user interface is built with **React.js** and **Bootstrap** to ensure an easy-to-use and responsive experience.
- Access the platform on any device (mobile, tablet, desktop).

---

## Technologies Used

- **Frontend**: React.js, React-Bootstrap, Vite
- **Backend**: **Google Apps Script** (for serving the mock interview API, handling questions stored in Google Sheets)
- **API Integration**: **Google Sheets API** (for storing and fetching interview questions)
- **Deployment**: GitHub Pages (for hosting the frontend)

---

## Installation

### Prerequisites

- **Node.js** and **npm** (or **Yarn**) installed on your system.
- A **Google Apps Script** project set up to provide API endpoints for fetching interview questions from **Google Sheets**.

### Steps to Set Up Frontend

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/interview-practice.git
   cd interview-practice

### Google sheet URL
https://docs.google.com/spreadsheets/d/16rmXEmHXYXDwCrVd0Mivt6NoBTP3eX7_Pv4iSUHj99Y/edit?usp=sharing
