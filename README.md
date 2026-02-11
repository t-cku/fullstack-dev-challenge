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

### Reflection
With a background in Python and C++, I treated the backend as the engine and the frontend (React) as the dashboard and UI. I made sure to keep the logic and maths on the server so they are centralised and would not require any reliance on the client. As always, I focused on the backend, API calls and data pipeline first before worrying about polishing the UI. I really liked using the useEffect hook, as it was very responsive, and I could see the graph update as soon as I dragged the sliders. I am also happy with how the server.ts loop works - it was able to handle 50 years (600 months), which was 600 iterations for the graph projection efficiently. To further improve the solution, I would consider implementing debouncing, which would mean the programme waits until the user finishes dragging, eg for 200 ms before sending requests to the server. I also think it would be great to add testing and validation to ensure edge cases are handled properly and there are no extreme values, such as negative numbers to be processed. 

### Setup and installation of dependencies:
```bash
yarn install
cd client && yarn install
yarn start 

Frontend: http://localhost:5173
Backend: http://localhost:3001 


 

