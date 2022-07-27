import {dummyData} from '../../assets/dummy/coinsasd';
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

export async function getAllCoins(): Promise<CoinsGeneralInterface[]> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await httpClient.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars');
    return dummyData;
  } catch (error) {
    throw new Error('error');
  }
}

export async function getNews(): Promise<NewsGeneralInterface> {
  try {
    const response = await httpClient.get(
      'https://cryptopanic.com/api/v1/posts/?auth_token=45ceb79c7efbb126fb6febcb5338622b0a8ab0f1&filter=hot&kind=news&regions=en',
    );
    return response.data;
  } catch (error) {
    throw new Error('error');
  }
}
