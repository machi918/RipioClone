import {useEffect, useState} from 'react';
import {setGeneralCoins, setNews} from '../redux/coinsSlice';
import {useAppDispatch} from '../redux/hooks';
import {getAllCoins, getNews} from '../service/https/coins.api';

export const useCryptoInfo = () => {
  const dispatch = useAppDispatch();

  const [error, setError] = useState<Error>();
  const [reloadData, setReloadData] = useState<boolean>(false);

  const getCoins = async () => {
    try {
      const response = await getAllCoins();
      dispatch(setGeneralCoins(response));
    } catch (err) {
      setError(err as Error);
    }
  };

  const getCrytoNews = async () => {
    try {
      const response = await getNews();
      dispatch(setNews(response));
    } catch (err) {
      setError(err as Error);
    }
  };

  const reload = () => {
    setReloadData(prevValue => !prevValue);
  };

  useEffect(() => {
    getCoins();
    getCrytoNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadData]);

  return {error, reload};
};
