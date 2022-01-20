<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref, Ref, onMounted } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  import { TradeListApi } from '/@/api/main/charts/line';

  export default defineComponent({
    props: {
      width: {
        type: String as PropType<string>,
        default: '100%',
      },
      height: {
        type: String as PropType<string>,
        default: 'calc(100vh - 78px)',
      },
    },
    setup() {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions, getInstance } = useECharts(chartRef as Ref<HTMLDivElement>);
      const line = getInstance();
      let xAxis: number[] = [];
      let yAxis: number[] = [];
      TradeListApi({
        begin: 1,
        end: 10000,
      }).then((resp) => {
        for (let v of resp) {
          xAxis.push(v.traded_at);
          yAxis.push(v.price);
        }
      });

      line?.on('datazoom', (params) => {
        console.log(params);
      });
      onMounted(() => {
        setOptions({
          tooltip: {
            trigger: 'axis',
          },
          xAxis: {
            data: xAxis,
          },
          yAxis: {
            boundaryGap: [0, '100%'],
            splitLine: {
              show: false,
            },
          },
          series: [
            {
              data: yAxis,
              type: 'line',
              smooth: true,
              showAllSymbol: 'auto',
              symbol: 'emptyCircle',
              symbolSize: 15,
            },
          ],
        });
      });
      return { chartRef };
    },
  });
</script>
