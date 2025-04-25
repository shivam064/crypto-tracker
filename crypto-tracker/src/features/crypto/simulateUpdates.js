import { updateCrypto } from '../../redux/cryptoSlice';

export class CryptoSimulator {
  constructor(store) {
    this.store = store;
  }

  start() {
    this.interval = setInterval(() => {
      const coins = ['bitcoin', 'ethereum', 'tether', 'ripple', 'binancecoin'];
      coins.forEach(coinId => {
        this.store.dispatch(updateCrypto({
          id: coinId,
          changes: {
            current_price: this.getRandomChange(100, 100000),
            price_change_percentage_1h: this.getRandomChange(-5, 5),
            price_change_percentage_24h: this.getRandomChange(-10, 10),
            price_change_percentage_7d: this.getRandomChange(-15, 15),
            total_volume: this.getRandomChange(1000000, 50000000)
          }
        }));
      });
    }, 2000);
  }

  stop() {
    clearInterval(this.interval);
  }

  getRandomChange(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }
}