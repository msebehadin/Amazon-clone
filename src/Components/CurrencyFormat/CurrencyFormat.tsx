import React from 'react';

type CurrencyProps = {
  amount: number;
};

const CurrencyFormat: React.FC<CurrencyProps> = ({ amount }) => {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);

  return <div>{formattedAmount}</div>;
};

export default CurrencyFormat;
