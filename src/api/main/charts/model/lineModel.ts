/**
 * @description: trade data list interface parameters
 */
export interface TradeListParams {
  begin: number;
  end: number;
}

export interface TradeListModel {
  symbol: string;
  price: string;
}
