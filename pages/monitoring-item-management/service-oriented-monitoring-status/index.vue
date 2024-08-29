<template>
  <v-row>
    <v-col cols="12">
      <table-card title="連線單位-連線單位聯絡資料" :items="items">
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
            :fixed-header="true"
            :headers="headers"
            :items="items"
            :search="search"
            :page="page"
            :loading="loading"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            height="500px"
            hide-default-footer
          >
            <template #[`header.operate`]="{ header }">
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <v-btn small color="success" @click="onAdd()">
                  <v-icon size="20">mdi-plus</v-icon>
                </v-btn>
              </div>
            </template>
            <template #body="{ items }">
              <tbody>
                <template v-if="$vuetify.breakpoint.smAndUp">
                  <template v-for="item in items">
                    <tr :key="`${item.id}`">
                      <td>
                        {{ item.id }}
                      </td>
                      <td nowrap="nowrap">
                        {{ item.orgNameZh }}
                      </td>
                      <td nowrap="nowrap">
                        <div class="d-inline mx-auto">
                          <v-icon size="20" :color="statusMap[item.status]"
                            >mdi-circle</v-icon
                          >
                          {{ $t(item.status) }}
                        </div>
                      </td>
                      <td nowrap="nowrap">
                        {{ item.eventCount }}
                      </td>
                      <td>
                        <div class="d-inline-flex" style="gap: 0.8rem">
                          <v-btn
                            small
                            color="info"
                            @click="item.viewable = !item.viewable"
                          >
                            <v-icon size="20">mdi-eye</v-icon>
                            <span class="d-none d-sm-inline-block">{{
                              $t('view')
                            }}</span>
                          </v-btn>
                          <v-btn small color="success" @click="onEdit(item)">
                            <v-icon size="20">mdi-pencil</v-icon>
                            <span class="d-none d-sm-inline-block">{{
                              $t('edit')
                            }}</span>
                          </v-btn>
                          <v-btn
                            small
                            color="danger"
                            class="px-2"
                            @click="onDelete(item)"
                          >
                            <v-icon class="white--text" size="20"
                              >mdi-trash-can-outline</v-icon
                            ><span
                              class="d-none d-sm-inline-block white--text"
                              >{{ $t('delete') }}</span
                            >
                          </v-btn>
                        </div>
                      </td>
                    </tr>
                    <tr v-if="item.viewable">
                      <td colspan="100%">
                        <event-alert :item="item" />
                      </td>
                    </tr>
                  </template>
                </template>
                <template v-else>
                  <v-card v-for="item in items" :key="item.id" class="mb-3">
                    <v-card-title
                      class="subheading font-weight-bold d-inline-flex justify-space-between w-100"
                    >
                      <div>{{ item.id }} {{ item.orgNameZh }}</div>
                    </v-card-title>
                    <div class="text-start px-2">
                      {{ $t('status') }}
                    </div>
                    <div class="text-end px-2">
                      <v-icon size="20" :color="statusMap[item.status]"
                        >mdi-circle</v-icon
                      >
                      {{ $t(item.status) }}
                    </div>
                    <div class="text-start px-2">
                      {{ $t('event.count') }}
                    </div>
                    <div class="text-end px-2">
                      {{ item.eventCount }}
                    </div>
                    <div v-if="item.viewable">
                        <event-alert :item="item" />
                    </div>
                    <v-card-actions>
                      <v-btn small color="info" @click="item.viewable = !item.viewable">
                        <v-icon size="20">mdi-eye</v-icon>
                        <span class="d-none d-sm-inline-block">{{
                          $t('view')
                        }}</span>
                      </v-btn>
                      <v-btn small color="success" @click="onEdit(item)">
                        <v-icon size="20">mdi-pencil</v-icon>
                        <span class="d-none d-sm-inline-block">{{
                          $t('edit')
                        }}</span>
                      </v-btn>
                      <v-btn
                        small
                        color="danger"
                        class="px-2"
                        @click="onDelete(item)"
                      >
                        <v-icon class="white--text" size="20"
                          >mdi-trash-can-outline</v-icon
                        ><span class="d-none d-sm-inline-block white--text">{{
                          $t('delete')
                        }}</span>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </tbody>
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import EventAlert from '@/components/EventAlert.vue';
import { statusMap } from '@/utils/statusMap';
import items from '~/assets/json/connection-unit.json';

export default {
  name: 'ServiceOrientedMonitoringStatus',
  components: { EventAlert },
  layout: 'admin-layout',
  data() {
    return {
      statusMap,
      items: items.map((item) => ({
        ...item,
        editable: false,
        viewable: false,
      })),
      selectItem: {},
      showModal : false,
    };
  },
  computed: {
    orgOptions() {
      return ['國網中心-新竹本部', '國網中心-台中分部', '國網中心-台南分部'];
    },
    headers() {
      return [
        {
          text: this.$t('id'),
          value: 'id',
          width: 80,
        },

        {
          text: this.$t('org.name.zh'),
          value: 'orgNameZh',
        },
        {
          text: this.$t('status'),
          value: 'status',
        },
        {
          text: this.$t('event.count'),
          value: 'eventCount',
        },
        { text: this.$t('operate'), value: 'operate', sortable: false },
      ];
    },
  },
  methods: {
    onAdd() {},
    onDelete() {},
    onEdit(item) {
      this.$router.push(`/monitoring-item-management/service-oriented-monitoring-status/${item.id}`);
    },
  },
};
</script>
