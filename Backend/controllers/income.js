const IncomeSchema = require("../models/IncomeModule");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    date,
  });
  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ message: "Amount should be positive" });
    }
    await income.save();
    res.status(200).json({ message: "Income Added" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  console.log(income);
};

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json({ incomes });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
};
