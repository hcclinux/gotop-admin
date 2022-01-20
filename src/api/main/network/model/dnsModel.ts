export type SearchDNSParams = {
  status?: number;
  domain?: string;
};

export type CreateDNSData = {
  domain: string;
  location: string;
  protocol: string;
  city: string;
  ip: string;
};

export interface DNSItem {
  id: number;
  domain: string;
  status: number;
  location: string;
  method: string;
  protocol: string;
  city: string;
  ip: string;
  delay: number;
  created_at: number;
  updated_at: number;
}

/**
 * @description: Request return value
 */
export type DNSListModel = DNSItem[];
