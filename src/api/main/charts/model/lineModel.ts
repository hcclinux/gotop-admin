/**
 * @description: trade data list interface parameters
 */
export interface TradeListParams {
  begin: number;
  end: number;
}

export interface TradeListItem {
  price: number;
  traded_at: number;
}

export type TradeListModel = TradeListItem[];
