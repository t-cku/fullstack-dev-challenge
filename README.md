# Compound Interest Calculator
This is a full-stack application that calculates compound interest over a 50-year period with an interactive visual.

### Backend:
- Node.js
- I used the backend as the financial and mathematical logic, ensuring that the calculation is consistent, testable and scalable

### Frontend:
- React / Chakra UI
- I built an interactive UI using Chakra UI for a user-friendly slider system

### Architecture:
The frontend uses the `useEffect` hook to monitor the sliders. Changes to the sliders would trigger a fetch request to the backend API, which would return the calculated data to be displayed on the chart. As for state managment, slider values and API results were managed using React useState to ensure the UI stays in sync with the backend data. 

### AI Attribution: 
During the process of this full-stack development challenge, I utilised Google Gemini. I consulted AI to guide me with learning TypeScript, React and Node.js given my background in C++ and Python. I also used AI to help debugging and refining the logic to improve the performance.

### Setup and installation of dependencies:
```bash
yarn install
cd client && yarn install
yarn start 

Frontend: http://localhost:5173
Backend: http://localhost:3001 


 

