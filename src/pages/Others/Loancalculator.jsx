import React, { useState } from "react";
import { Button, Input } from "antd";
import { GoArrowUpRight } from "react-icons/go";

const Loancalculator = () => {
  const [price, setPrice] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateLoan = () => {
    const loanAmount = price - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfMonths = loanTerm * 12;

    const monthly =
      loanAmount *
      (monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths)));
    const totalPay = monthly * numberOfMonths;
    const totalInt = totalPay - loanAmount;

    setMonthlyPayment(monthly);
    setTotalPayment(totalPay);
    setTotalInterest(totalInt);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white rounded-lg border shadow-sm w-full max-w-7xl flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="p-10 flex-1">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Auto Loan Calculator
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Calculate your monthly payments, total interest, and total payment
            for the entire loan duration. Enter your details below and see how
            much your car loan will cost you.
          </p>

          {/* Input Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Input
              placeholder="Price ($)"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              addonBefore="Price ($)"
              size="large"
              className="text-lg"
            />
            <Input
              placeholder="Interest Rate (%)"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              addonBefore="Rate (%)"
              size="large"
              className="text-lg"
            />
            <Input
              placeholder="Loan Term (years)"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              addonBefore="Term (years)"
              size="large"
              className="text-lg"
            />
            <Input
              placeholder="Down Payment ($)"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              addonBefore="Down Payment"
              size="large"
              className="text-lg"
            />
          </div>

          {/* Button */}
          <Button
            type="primary"
            size="large"
            className="w-full text-lg py-2"
            onClick={calculateLoan}
          >
            Calculate Loan
            <GoArrowUpRight className="text-xl" />
          </Button>
        </div>

        {/* Right Section */}
        <div className="bg-blue-50 p-8 rounded-r-lg lg:w-1/3">
          <div className="space-y-6">
            <div>
              <p className="text-gray-600 font-semibold">Monthly Payment</p>
              <p className="text-blue-500 text-xl font-bold">
                ${monthlyPayment.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Total Interest</p>
              <p className="text-blue-500 text-xl font-bold">
                ${totalInterest.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Total Payment</p>
              <p className="text-blue-500 text-xl font-bold">
                ${totalPayment.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loancalculator;
