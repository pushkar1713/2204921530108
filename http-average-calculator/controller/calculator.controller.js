import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.TOKEN;
const windowSize = 10;
let windowPrevState = [];
let windowCurrState = [];
let count = 0;

export class NumberController {
  static async evenNumbers(req, res) {
    count++;
    try {
      console.log(token);
      const axres = await axios.get(
        "http://20.244.56.144/evaluation-service/even",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = axres.data.numbers;
      if (count == 0) {
        windowPrevState = [];
      } else {
        windowPrevState = windowCurrState;
      }
      let final_Numbers = [];
      windowCurrState = data;
      const arr_new = windowPrevState.concat(windowCurrState);
      let new_Numbers = Array.from(new Set(arr_new));
      if (new_Numbers.length <= windowSize) {
        final_Numbers = new_Numbers;
      } else {
        while (new_Numbers.length > windowSize) {
          new_Numbers.shift();
        }
        final_Numbers = new_Numbers;
      }
      const avg =
        final_Numbers.reduce((a, b) => a + b, 0) / final_Numbers.length;
      res.json({
        windowPrevState: JSON.stringify(windowPrevState.sort()),
        windowCurrState: JSON.stringify(windowCurrState.sort()),
        numbers: JSON.stringify(final_Numbers.sort()),
        avg: avg,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async primeNumbers(req, res) {
    count++;
    try {
      console.log(token);
      const axres = await axios.get(
        "http://20.244.56.144/evaluation-service/primes",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = axres.data.numbers;
      if (count == 0) {
        windowPrevState = [];
      } else {
        windowPrevState = windowCurrState;
      }
      let final_Numbers = [];
      windowCurrState = data;
      const arr_new = windowPrevState.concat(windowCurrState);
      let new_Numbers = Array.from(new Set(arr_new));
      if (new_Numbers.length <= windowSize) {
        final_Numbers = new_Numbers;
      } else {
        while (new_Numbers.length > windowSize) {
          new_Numbers.shift();
        }
        final_Numbers = new_Numbers;
      }
      const avg =
        final_Numbers.reduce((a, b) => a + b, 0) / final_Numbers.length;
      res.json({
        windowPrevState: JSON.stringify(windowPrevState.sort()),
        windowCurrState: JSON.stringify(windowCurrState.sort()),
        numbers: JSON.stringify(final_Numbers.sort()),
        avg: avg,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async fibonacciNumbers(req, res) {
    count++;
    try {
      console.log(token);
      const axres = await axios.get(
        "http://20.244.56.144/evaluation-service/fibo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = axres.data.numbers;
      if (count == 0) {
        windowPrevState = [];
      } else {
        windowPrevState = windowCurrState;
      }
      let final_Numbers = [];
      windowCurrState = data;
      const arr_new = windowPrevState.concat(windowCurrState);
      let new_Numbers = Array.from(new Set(arr_new));
      if (new_Numbers.length <= windowSize) {
        final_Numbers = new_Numbers;
      } else {
        while (new_Numbers.length > windowSize) {
          new_Numbers.shift();
        }
        final_Numbers = new_Numbers;
      }
      const avg =
        final_Numbers.reduce((a, b) => a + b, 0) / final_Numbers.length;
      res.json({
        windowPrevState: JSON.stringify(windowPrevState.sort()),
        windowCurrState: JSON.stringify(windowCurrState.sort()),
        numbers: JSON.stringify(final_Numbers.sort()),
        avg: avg,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async randomNumbers(req, res) {
    count++;
    try {
      console.log(token);
      const axres = await axios.get(
        "http://20.244.56.144/evaluation-service/rand",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = axres.data.numbers;
      if (count == 0) {
        windowPrevState = [];
      } else {
        windowPrevState = windowCurrState;
      }
      let final_Numbers = [];
      windowCurrState = data;
      const arr_new = windowPrevState.concat(windowCurrState);
      let new_Numbers = Array.from(new Set(arr_new));
      if (new_Numbers.length <= windowSize) {
        final_Numbers = new_Numbers;
      } else {
        while (new_Numbers.length > windowSize) {
          new_Numbers.shift();
        }
        final_Numbers = new_Numbers;
      }
      const avg =
        final_Numbers.reduce((a, b) => a + b, 0) / final_Numbers.length;
      res.json({
        windowPrevState: JSON.stringify(windowPrevState.sort()),
        windowCurrState: JSON.stringify(windowCurrState.sort()),
        numbers: JSON.stringify(final_Numbers.sort()),
        avg: avg,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default NumberController;
