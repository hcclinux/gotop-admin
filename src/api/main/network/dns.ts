import { SearchDNSParams, CreateDNSData, DNSListGetResultModel } from './model/dnsModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  DNSList = '/tree/getDemoOptions',
  DNSDetail = '',
  DNSDelete = '',
  DNSUpdate = '',
  DNSCreate = '',
}

/**
 * @description: Get DNS list
 */
export const dnsListApi = (params?: SearchDNSParams) =>
  defHttp.get<DNSListGetResultModel>({ url: Api.DNSList, params });

/**
 * @description: Get DNS detail
 */
export const dnsDetailApi = (id: number) =>
  defHttp.get<Recordable[]>({ url: Api.DNSDetail, params: { id } });

/**
 * @description: Get DNS detail
 */
export const dnsCreateApi = (data: CreateDNSData) =>
  defHttp.post({ url: Api.DNSCreate, params: { data } });
