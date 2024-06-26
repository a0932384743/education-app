import Vue from 'vue';
import ECharts from 'vue-echarts';

import 'echarts';
import 'static/js/world';
import 'echarts-wordcloud';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markArea';
import { registerMap, use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LinesChart } from 'echarts/charts';
import { GeoComponent } from 'echarts/components';
import usaGEO from 'assets/json/usa-geo.json';
import taiwanGEO from 'assets/json/taiwan-geo.json';
registerMap('usaGEO', usaGEO);
registerMap('taiwanGEO', taiwanGEO);
// Register the required components
use([CanvasRenderer, LinesChart, GeoComponent]);
Vue.component('VChart', ECharts);
