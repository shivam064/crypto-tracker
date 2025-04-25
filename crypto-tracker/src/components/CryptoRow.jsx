import React from 'react';

const CryptoRow = ({ crypto }) => {
  const formatNumber = (num) => {
    if (!num) return 'N/A';
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  return (
    <tr>
      <td>{crypto.market_cap_rank}</td>
      <td><img src={crypto.image} alt={crypto.name} width="24" /></td>
      <td>{crypto.name}</td>
      <td>{crypto.symbol.toUpperCase()}</td>
      <td>${crypto.current_price?.toLocaleString() || 'N/A'}</td>
      <td style={{ color: crypto.price_change_percentage_1h >= 0 ? 'green' : 'red' }}>
        {crypto.price_change_percentage_1h?.toFixed(2) || '0.00'}%
      </td>
      <td style={{ color: crypto.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
        {crypto.price_change_percentage_24h?.toFixed(2) || '0.00'}%
      </td>
      <td style={{ color: crypto.price_change_percentage_7d >= 0 ? 'green' : 'red' }}>
        {crypto.price_change_percentage_7d?.toFixed(2) || '0.00'}%
      </td>
      <td>{formatNumber(crypto.market_cap)}</td>
      <td>{formatNumber(crypto.total_volume)}</td>
      <td>{crypto.circulating_supply?.toLocaleString() || 'N/A'}</td>
      <td>{crypto.max_supply?.toLocaleString() || 'N/A'}</td>
      <td>[📈]</td>
    </tr>
  );
};

export default CryptoRow;