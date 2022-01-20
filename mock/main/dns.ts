import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

export function buildDNSDataList() {
  return [
    {
      id: 1,
      domain: 'https://api.binance.com',
      status: 1,
      location: 'China',
      method: '[1]',
      protocol: 'RESTFul',
      city: 'Hong Kong',
      ip: '127.0.0.1',
      delay: 234,
      created_at: 1642226306,
      updated_at: 1642226500,
    },
    {
      id: 2,
      domain: 'https://api.binance.com',
      status: 1,
      location: 'China',
      method: '[1]',
      protocol: 'RESTFul',
      city: 'Hong Kong',
      ip: '127.0.0.1',
      delay: 234,
      created_at: 1642226306,
      updated_at: 1642226500,
    },
    {
      id: 3,
      domain: 'https://api.binance.com',
      status: 1,
      location: 'China',
      method: '[1]',
      protocol: 'RESTFul',
      city: 'Hong Kong',
      ip: '127.0.0.1',
      delay: 234,
      created_at: 1642226306,
      updated_at: 1642226500,
    },
    {
      id: 4,
      domain: 'https://api.binance.com',
      status: 1,
      location: 'China',
      method: '[1]',
      protocol: 'RESTFul',
      city: 'Hong Kong',
      ip: '127.0.0.1',
      delay: 234,
      created_at: 1642226306,
      updated_at: 1642226500,
    },
    {
      id: 5,
      domain: 'https://api.binance.com',
      status: 1,
      location: 'China',
      method: '[1]',
      protocol: 'RESTFul',
      city: 'Hong Kong',
      ip: '127.0.0.1',
      delay: 234,
      created_at: 1642226306,
      updated_at: 1642226500,
    },
    {
      id: 6,
      domain: 'https://api.binance.com',
      status: 1,
      location: 'China',
      method: '[1]',
      protocol: 'RESTFul',
      city: 'Hong Kong',
      ip: '127.0.0.1',
      delay: 234,
      created_at: 1642226306,
      updated_at: 1642226500,
    },
    {
      id: 7,
      domain: 'https://api.binance.com',
      status: 1,
      location: 'China',
      method: '[1]',
      protocol: 'RESTFul',
      city: 'Hong Kong',
      ip: '127.0.0.1',
      delay: 234,
      created_at: 1642226306,
      updated_at: 1642226500,
    },
    {
      id: 8,
      domain: 'https://api.binance.com',
      status: 1,
      location: 'China',
      method: '[1]',
      protocol: 'RESTFul',
      city: 'Hong Kong',
      ip: '127.0.0.1',
      delay: 234,
      created_at: 1642226306,
      updated_at: 1642226500,
    },
    {
      id: 9,
      domain: 'https://api.binance.com',
      status: 1,
      location: 'China',
      method: '[1]',
      protocol: 'RESTFul',
      city: 'Hong Kong',
      ip: '127.0.0.1',
      delay: 234,
      created_at: 1642226306,
      updated_at: 1642226500,
    },
    {
      id: 10,
      domain: 'https://api.binance.com',
      status: 1,
      location: 'China',
      method: '[1]',
      protocol: 'RESTFul',
      city: 'Hong Kong',
      ip: '127.0.0.1',
      delay: 234,
      created_at: 1642226306,
      updated_at: 1642226500,
    },
    {
      id: 11,
      domain: 'https://api.binance.com',
      status: 1,
      location: 'China',
      method: '[1]',
      protocol: 'RESTFul',
      city: 'Hong Kong',
      ip: '127.0.0.1',
      delay: 234,
      created_at: 1642226306,
      updated_at: 1642226500,
    },
  ];
}

export default [
  {
    url: '/basic-api/dns/list',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(buildDNSDataList());
    },
  },
] as MockMethod[];
