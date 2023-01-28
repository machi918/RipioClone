import {useEffect, useState} from 'react';
import {CoinHistoricalPriceInterface, getCoinHistoricalPrice} from '../service/https/coins.api';

export const useHistoricalPrice = (id: string) => {
  const [data, setData] = useState<CoinHistoricalPriceInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  const getHistoricData = async (coinID: string) => {
    setIsLoading(true);
    try {
      const response = await getCoinHistoricalPrice(coinID);
      setData(response);
    } catch (err) {
      const typedError = err as Error;
      setError(typedError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getHistoricData(id);
  }, [id]);

  return {data, isLoading, error};
};
