import express, { Request, Response } from "express";
import cors from 'cors';

const app = express();
app.use(cors());

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



app.get("/api/calculate", (req: Request, res: Response) => {
  //extract inputs from query string, then convert to numbers
  const initial = Number(req.query.initial) || 0;
  const monthly = Number(req.query.monthly) || 0;
  const annualRate = Number(req.query.interest) || 0;

  const years = 50;
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = years * 12;

  let results = [];
  let currentBalance = initial;

  //iterate
  for (let month = 0; month <= totalMonths; month++) {
    if (month > 0) {
      //compound the existing balance + add new deposit
      currentBalance = (currentBalance + monthly) * (1 + monthlyRate);
    }

    //return data for every 12 months/year
    if (month % 12 == 0) {
      results.push({
        year: month / 12,
        amount: Math.round(currentBalance) 
      });
    }
  }

  //send json to front end
  res.json(results);
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
