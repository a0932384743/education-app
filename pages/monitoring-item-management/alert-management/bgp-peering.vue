<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="BGP Peering-連線單位" :items="items">
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
            :headers="headers"
            :items="items"
            :search="search"
            :page="page"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            :loading="loading"
            hide-default-footer
          >
            <template #[`item.receivedCount`]="{ item }">
              <div v-if="!item.editable">
                {{ item.receivedCount.toLocaleString() }}
              </div>
              <v-text-field
                v-else
                v-model="item.receivedCount"
                type="number"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.declaredCount`]="{ item }">
              <div v-if="!item.editable">
                {{ item.declaredCount.toLocaleString() }}
              </div>
              <v-text-field
                v-else
                v-model="item.declaredCount"
                type="number"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.isAlerting`]="{ item }">
              <div v-if="!item.editable">{{ item.isAlerting }}</div>
              <v-btn
                v-else
                small
                class="white--text"
                :color="item.isAlerting === 'On' ? 'success' : 'danger'"
                @click="
                  item.isAlerting = item.isAlerting === 'On' ? 'Off' : 'On'
                "
              >
                <v-icon size="20" dark>mdi-power</v-icon>
                {{ item.isAlerting }}
              </v-btn>
            </template>
            <template #[`item.operate`]="{ item }">
              <v-btn
                small
                :disabled="Object.keys(item).some((key) => item[key] === '')"
                :color="item.editable ? 'secondary' : 'info'"
                @click="
                  Object.keys(item).every((key) => item[key])
                    ? (item.editable = !item.editable)
                    : (item.editable = true)
                "
              >
                <v-icon size="20">mdi-pencil</v-icon>
                <span class="d-none d-sm-inline-block">{{ $t('edit') }}</span>
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
  name: 'BgpPeering',
  layout: 'admin-layout',
  data() {
    return {
      items: [],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: this.$t('connect.unit.id'),
          value: 'id',
          width: 100,
        },
        {
          text: this.$t('connect.unit.name'),
          value: 'connectUnit',
        },
        {
          text: this.$t('interface.alerting'),
          value: 'isAlerting',
        },
        {
          text: this.$t('received.num.current'),
          value: 'receivedCount',
        },
        {
          text: this.$t('declared.num.current'),
          value: 'declaredCount',
        },
        {
          text: this.$t('operate'),
          value: 'operate',
        },
      ];
    },
  },
  mounted() {
    this.items = this.$store.getters['connection/getConnectionList'].map(
      (item) => ({ ...item, editable: false })
    );
  },
  destroyed() {
    this.$store.dispatch('configuration/setConfigurationList', this.items);
  },
};
</script>
