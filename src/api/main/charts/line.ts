import { defHttp } from '/@/utils/http/axios';
import { TradeListParams, TradeListModel } from './model/lineModel';

enum Api {
  TRADE_DATA_LIST = '/trade/trades/list',
}
/**
 * @description: Get trade data list
 */

export const TradeListApi = (params: TradeListParams) =>
  defHttp.get<TradeListModel>({
    url: Api.TRADE_DATA_LIST,
    params,
  });
