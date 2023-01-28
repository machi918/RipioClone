import {NEWS_TOKEN, NEWS_URL, COINS_URL} from '@env';
import {dummyData} from '../../assets/dummy/coinsDummy';
import httpClient from './api.service';

//Interfaces
//-----------------------------------------

export interface CoinsGeneralInterface {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  has: number;
}

//-----------------------------------------
export interface NewsGeneralInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: NewsInterface[];
}

export interface NewsInterface {
  kind: string;
  domain: string;
  source: {title: string; region: string; domain: string; path?: any};
  title: string;
  published_at: Date;
  slug: string;
  currencies: {code: string; title: string; slug: string; url: string}[];
  id: number;
  url: string;
  created_at: Date;
}

//-----------------------------------------

export interface CoinHistoricalPriceInterface {
  x: number;
  y: number;
  date: number;
}

interface CoinHistoricalPriceInterfaceResponse {
  prices: [];
  market_caps: [];
  total_volumes: [];
}

//-----------------------------------------

export async function getAllCoins(): Promise<CoinsGeneralInterface[]> {
  try {
    return dummyData;
  } catch (error) {
    const typedError: Error = {name: 'COIN_ERROR', message: 'Ha ocurrido un problema al cargar las criptos'};
    throw typedError;
  }
}

export async function getNews(): Promise<NewsGeneralInterface> {
  const response = await httpClient.get(NEWS_URL, {
    params: {auth_token: NEWS_TOKEN, filter: 'hot', kind: 'news', regions: 'en'},
  });
  return response.data;
}

export async function getCoinHistoricalPrice(id: string): Promise<CoinHistoricalPriceInterface[]> {
  const response = await httpClient.get(`${COINS_URL}/${id}/market_chart`, {
    params: {vs_currency: 'ars', days: '60', interval: 'daily'},
  });

  let rawData: CoinHistoricalPriceInterfaceResponse = response.data;

  let parsedData: CoinHistoricalPriceInterface[] = [];

  for (let index = 0; index < rawData.prices.length; index++) {
    let aux: CoinHistoricalPriceInterface = {
      x: index,
      y: rawData.prices[index][1],
      date: rawData.prices[index][0],
    };
    parsedData.push(aux);
  }
  return parsedData;
}
