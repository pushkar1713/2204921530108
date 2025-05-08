import NumberController from "../controller/calculator.controller.js";

function dispatcher(req, res, next) {
  const { id } = req.params;
  if (id === "p") {
    return NumberController.primeNumbers(req, res);
  } else if (id === "f") {
    return NumberController.fibonacciNumbers(req, res);
  } else if (id === "e") {
    return NumberController.evenNumbers(req, res);
  } else if (id === "r") {
    return NumberController.randomNumbers(req, res);
  } else {
    return res.status(400).json({ message: "No Controller Found" });
  }
}

export default dispatcher;
