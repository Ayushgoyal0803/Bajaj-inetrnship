const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;

    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];

    for (let x of data) {
        if (typeof x == 'string' && /^[A-Za-z]+$/.test(x)) {
            alphabets.push(x.toUpperCase());
        } else {
            const d = parseInt(x);
            if (d % 2 == 0) {
                evenNumbers.push(x);
            } else {
                oddNumbers.push(x);
            }
        }
    }
 

    const user = {
      user_id: "Ayush_Goyal_08082003",
      email: "ayush0334.be21@chitkara.edu.in",
      roll_number: "2110990334"
    };

    const response = {
      is_success: true,
      user_id: user.user_id,
      email: user.email,
      roll_number: user.roll_number,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets
    };

    res.json(response);
} catch (error) {
  res.status(500).json({
      is_success: false,
  })
}
});

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
