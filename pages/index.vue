<template>
  <div>
    <panel-fan/>
    <aero-power-page/>
    <air-supply-fan/>
    <eva-porative/>
    <product-inquiry />
  </div>
</template>

<script>
import PanelFan from '@/components/PanelFan.vue';
import AeroPowerPage from '@/components/AeroPowerPage.vue';
import AirSupplyFan from '@/components/AirSupplyFan.vue';
import EvaPorative from '@/components/EvaPorative.vue';
import ProductInquiry from '@/components/ProductInquiry.vue';

export default {
  name: 'Home',
  components: {ProductInquiry, EvaPorative, AirSupplyFan, AeroPowerPage, PanelFan},
  layout: 'default-layout',
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
