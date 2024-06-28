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
import usaGEO from 'assets/map/usa-geo.json';
import taiwanGEO from 'assets/map/taiwan-geo.json';

const geo = { ...taiwanGEO };
const feature = usaGEO.features.map((f) => {
  f.geometry.coordinates = f.geometry.coordinates.map((coordinates) => {
    return coordinates.map((location) => {
      return [145 + location[0] / 6, 20 + location[1] / 6];
    });
  });
  return f;
});

geo.features = [...geo.features, ...feature];

registerMap('usaGEO', usaGEO);
registerMap('taiwanGEO', taiwanGEO);
registerMap('geo', geo);

// Register the required components
use([CanvasRenderer, LinesChart, GeoComponent]);
Vue.component('VChart', ECharts);
