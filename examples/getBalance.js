import { mobizon } from './config/setup';

(async () => {
  /** Obter saldo */
  const getBalance = await mobizon.getBalance();

  console.log(getBalance);
})();
