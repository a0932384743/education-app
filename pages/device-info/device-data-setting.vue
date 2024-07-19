<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="設備資料-設備資料設定檔" :items="items">
        <template
          #default="{
            search,
            footerProps,
            itemPerPage,
            page,
            items,
            loading,
            headerProps,
          }"
        >
          <v-data-table
            :loading="loading"
            :headers="headers"
            :items="items"
            :search="search"
            :page="page"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
          >
            <template #[`item.contact`]="{ item }">
              <div class="d-inline-flex flex-column" style="gap: 0.4rem">
                <a class="info--text text-no-wrap" href="#"
                  >{{ item.contact }}
                  <v-icon size="20" class="mx-2" color="info"
                    >mdi-card-account-details-outline</v-icon
                  ></a
                >
                <a
                  class="info--text text-no-wrap"
                  :href="`tel:${item.mobile}`"
                  >{{ item.mobile }}</a
                >
                <a
                  class="info--text text-no-wrap"
                  :href="`tel:${item.phone}`"
                  >{{ item.phone }}</a
                >
              </div>
            </template>
            <template #[`item.config`]="{ item }">
              <v-btn small color="info" @click="goToDeviceConfiguration(item)">
                <v-icon>mdi-magnify</v-icon>
                <span class="d-none d-sm-inline-block">{{ $t('view') }}</span>
              </v-btn>
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'DeviceDataSetting',
  layout: 'admin-layout',
  data() {
    return {
      items: [],
    }
  },
  computed: {
    headers() {
      return [
        {
          text: this.$t('id'),
          value: 'id',
          width: 80,
        },

        {
          text: this.$t('device.category'),
          value: 'type',
        },
        {
          text: this.$t('device.name'),
          value: 'device',
        },
        { text: 'GigaPop', value: 'gigapop' },
        { text: 'OOB IP', value: 'ip' },
        { text: 'IPv4', value: 'ipv4' },
        { text: 'IPv6', value: 'ipv6' },
        {
          text: this.$t('contact.info'),
          value: 'contact',
        },
        { text: 'Config', value: 'config' },
      ]
    },
  },
  mounted() {
    this.onSearch()
  },
  methods: {
    goToDeviceConfiguration(item) {
      this.$router.push(`/device-configuration/${item.id}`)
    },
    onSearch() {
      this.items = this.$store.getters['configuration/getConfigurationList']
    },
  },
}
</script>
