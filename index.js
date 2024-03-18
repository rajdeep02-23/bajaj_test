const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/bfhl", (req, res) => {
  const { array } = req.body;

  const status = "Success";
  const userId = "rajdeep_kaur_17091999";
  const emailId = "rajdeep@gmail.com";
  const collegeRollNumber = "2110992357";

  const evenNumbers = array.filter(
    (num) => num % 2 === 0 && typeof num === "number",
  );
  const oddNumbers = array.filter(
    (num) => num % 2 !== 0 && typeof num === "number",
  );
  const alphabetsUppercase = array
    .filter((char) => typeof char === "string" && char.match(/[a-zA-Z]/))
    .map((char) => char.toUpperCase());

  const response = {
    status,
    user_id: userId,
    email_id: emailId,
    college_roll_number: collegeRollNumber,
    even_numbers: evenNumbers,
    odd_numbers: oddNumbers,
    alphabets_uppercase: alphabetsUppercase,
  };

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
