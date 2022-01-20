import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const charts: AppRouteModule = {
  path: '/charts',
  name: 'Charts',
  component: LAYOUT,
  redirect: '/charts/line',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: t('routes.main.charts.charts'),
  },
  children: [
    {
      path: 'line',
      name: 'Line',
      meta: {
        title: t('routes.main.charts.line'),
      },
      component: () => import('/@/views/main/charts/Line.vue'),
    },
  ],
};

export default charts;
