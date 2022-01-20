import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const network: AppRouteModule = {
  path: '/network',
  name: 'Network',
  component: LAYOUT,
  redirect: '/network/dns',
  meta: {
    orderNo: 600,
    icon: 'ion:tv-outline',
    title: t('routes.main.network.network'),
  },
  children: [
    {
      path: 'dns',
      name: 'DNS',
      meta: {
        title: t('routes.main.network.dns'),
      },
      component: () => import('/@/views/main/network/Dns.vue'),
    },
  ],
};

export default network;
