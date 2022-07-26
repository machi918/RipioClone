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
    throw new Error('Ha ocurrido un problema al cargar las criptos');
  }
}

export async function getNews(): Promise<NewsGeneralInterface> {
  try {
    const response = await httpClient.get(
      'https://cryptopanic.com/api/v1/posts/?auth_token=45ceb79c7efbb126fb6febcb5338622b0a8ab0f1&filter=hot&kind=news&regions=en',
    );

    return response.data;
  } catch (error) {
    throw new Error('Ha ocurrido un problema al cargar las noticias');
  }
}

export async function getCoinHistoricalPrice(id: string): Promise<CoinHistoricalPriceInterface[]> {
  try {
    const response = await httpClient.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=ars&days=60&interval=daily`,
    );

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
  } catch (error) {
    throw new Error('La información no está disponible');
  }
}
