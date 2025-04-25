import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData } from '../redux/cryptoSlice';
import CryptoRow from './CryptoRow';

const CryptoPrice = () => {
  const dispatch = useDispatch();
  const { cryptos, status, error } = useSelector(state => state.crypto);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  if (status === 'loading') return <div>Loading cryptocurrency data...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>Volume (24h)</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map(crypto => (
            <CryptoRow key={crypto.id} crypto={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoPrice;