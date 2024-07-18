import Vue from 'vue';
import ECharts from 'vue-echarts';

import 'echarts';
import 'static/js/world';
import 'echarts-wordcloud';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markArea';
import 'echarts-gl';

import { registerMap, use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { GeoComponent } from 'echarts/components';

import { Geo3DComponent } from 'echarts-gl/components';
import usaGEO from 'assets/map/usa-geo.json';
import taiwanGEO from 'assets/map/taiwan-geo.json';
import nt from 'assets/map/新北市鄉鎮.json';
import tp from 'assets/map/臺北市鄉鎮.json';
import il from 'assets/map/宜蘭縣鄉鎮.json';
import ty from 'assets/map/桃園市鄉鎮.json';
import cz from 'assets/map/新竹市鄉鎮.json';
import czt from 'assets/map/新竹縣鄉鎮.json';
import tc from 'assets/map/臺中市鄉鎮.json';
import cc from 'assets/map/彰化縣鄉鎮.json';
import ntt from 'assets/map/南投縣鄉鎮.json';
import tn from 'assets/map/臺南市鄉鎮.json';
import zy from 'assets/map/嘉義市鄉鎮.json';
import zyt from 'assets/map/嘉義縣鄉鎮.json';
import ks from 'assets/map/高雄市鄉鎮.json';
import pt from 'assets/map/屏東縣鄉鎮.json';
import tt from 'assets/map/臺東縣鄉鎮.json';
import hl from 'assets/map/花蓮縣鄉鎮.json';

const geo = { ...taiwanGEO };
const feature = usaGEO.features.map((f) => {
  f.geometry.coordinates = f.geometry.coordinates.map((coordinates) => {
    return coordinates.map((location) => {
      return [128 + location[0] / 25, 22.5 + location[1] / 25];
    });
  });
  return f;
});

geo.features = [...geo.features, ...feature];
registerMap('花蓮縣', hl);
registerMap('臺東縣', tt);
registerMap('屏東縣', pt);
registerMap('高雄市', ks);
registerMap('台北市', tp);
registerMap('新北市', nt);
registerMap('嘉義市', zy);
registerMap('嘉義縣', zyt);
registerMap('台南市', tn);

registerMap('宜蘭縣', il);
registerMap('南投縣', ntt);
registerMap('桃園縣', ty);
registerMap('新竹市', cz);
registerMap('彰化縣', cc);
registerMap('新竹縣', czt);
registerMap('台中市', tc);

registerMap('usaGEO', usaGEO);
registerMap('taiwanGEO', taiwanGEO);
registerMap('geo', geo);

// Register the required components
use([CanvasRenderer, GeoComponent, Geo3DComponent]);
Vue.component('VChart', ECharts);
