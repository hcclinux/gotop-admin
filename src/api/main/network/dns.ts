import { SearchDNSParams, CreateDNSData, DNSListModel } from './model/dnsModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  DNS_LIST = '/dns/list',
  DNS_DETAIL = '',
  DNS_DELETE = '',
  DNS_UPDATE = '',
  DNS_CREATE = '',
}

/**
 * @description: Get DNS list
 */
export const dnsListApi = (params?: SearchDNSParams) =>
  defHttp.get<DNSListModel>({ url: Api.DNS_LIST, params });

/**
 * @description: Get DNS detail
 */
export const dnsDetailApi = (id: number) =>
  defHttp.get<Recordable[]>({ url: Api.DNS_DETAIL, params: { id } });

/**
 * @description: Get DNS detail
 */
export const dnsCreateApi = (data: CreateDNSData) =>
  defHttp.post({ url: Api.DNS_CREATE, params: { data } });
