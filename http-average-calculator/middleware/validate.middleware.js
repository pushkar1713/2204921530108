function validate(req, res, next) {
  const id = req.params.id;
  console.log(id);
  if (/^[pfer]$/.test(id)) next();
  else res.status(400).json({ message: "Invalid ID" });
}

export default validate;
