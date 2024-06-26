<template>
  <v-card>
    <v-card-title class="flex-nowrap">
      <span class="font-weight-bold text-truncate">{{ $t(title) }}</span>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-menu
        min-width="100"
        transition="slide-y-transition"
        offset-y
        bottom
        left
      >
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" text v-on="on">
            <v-icon>mdi-download</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="subtitle-2"> CSV </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="subtitle-2"> EXCEL </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="subtitle-2"> PDF </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-divider />
    <v-card-text class="pb-8">
      <div class="text-right mt-2 mb-1">
        <v-text-field
          v-model="search"
          small
          append-icon="mdi-magnify"
          :label="$t('search')"
          clearable
          hide-details
          class="d-inline-flex"
        />
      </div>
      <div class="overflow-x-auto">
        <slot
          :search="search"
          :footer-props="footerProps"
          :page="page"
          :item-per-page="itemPerPage"
          :header-props="headerProps"
          :items="items"
        />
      </div>
      <div
        class="d-inline-flex w-100 pt-2 justify-space-between align-start align-sm-center flex-sm-row flex-column my-2"
      >
        <div class="text-left">
          {{
            $t('table.footer.text.1', [
              (page - 1) * 10,
              page * 10 > totalItem ? totalItem : page * 10,
              totalItem,
            ])
          }}
        </div>
        <div class="">
          <v-pagination v-model="page" :length="totalPage" />
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'TableCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      search: '',
      page: 1,
      itemPerPage: 10,
    }
  },
  computed: {
    footerProps() {
      return {
        itemsPerPageAllText: this.$t('all'),
        itemsPerPageText: this.$t('per.page'),
        pageText: this.$t('current.page'),
      }
    },
    headerProps() {
      return {
        sortByText: this.$t('sort.by'),
        itemsPerPageText: this.$t('per.page'),
        pageText: this.$t('current.page'),
      }
    },
    totalPage() {
      return Math.ceil((this.items?.length ?? 0) / this.itemPerPage)
    },
    totalItem() {
      return this.items?.length ?? 0
    },
  },
}
</script>
