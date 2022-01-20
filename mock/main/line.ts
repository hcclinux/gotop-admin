import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

export function createTradeDataList() {
  return [
    {
      price: 35045,
      traded_at: 1625097600041,
    },
    {
      price: 35046,
      traded_at: 1625097600042,
    },
    {
      price: 35047,
      traded_at: 1625097600043,
    },
    {
      price: 35048,
      traded_at: 1625097600044,
    },
    {
      price: 35049,
      traded_at: 1625097600045,
    },
    {
      price: 35035,
      traded_at: 1625097600046,
    },
    {
      price: 35036,
      traded_at: 1625097600047,
    },
    {
      price: 35037,
      traded_at: 1625097600048,
    },
    {
      price: 35038,
      traded_at: 1625097600049,
    },
    {
      price: 35038,
      traded_at: 1625097600051,
    },
    {
      price: 35040,
      traded_at: 1625097600061,
    },
    {
      price: 35041,
      traded_at: 1625097600071,
    },
    {
      price: 35042,
      traded_at: 1625097600081,
    },
    {
      price: 35043,
      traded_at: 1625097600091,
    },
  ];
}

export default [
  {
    url: '/basic-api/trade/list',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(createTradeDataList());
    },
  },
] as MockMethod[];
