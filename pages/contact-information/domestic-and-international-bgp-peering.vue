<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="國內外BGP Peering資料" :items="items">
        <template
          #default="{
            search,
            footerProps,
            itemPerPage,
            page,
            loading,
            items,
            headerProps,
          }"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            :page="page"
            :loading="loading"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
          >
            <template #[`header.contacts`]="{ header }">
              <div
                class="d-inline-flex align-center flex-column"
                style="gap: 0.5rem"
              >
                <div>{{ header.text }}</div>
                <div>(格式:聯絡人1,電話1、電話2,Email1、Email2,聯絡人2....)</div>
              </div>
            </template>
            <template #[`header.high_critical_peer`]="{ header }">
              <div
                class="d-inline-flex align-center flex-column"
                style="gap: 0.5rem"
              >
                <div>{{ header.text }}</div>
                <div>(+25%)</div>
              </div>
            </template>
            <template #[`header.low_critical_peer`]="{ header }">
              <div
                class="d-inline-flex align-center flex-column"
                style="gap: 0.5rem"
              >
                <div>{{ header.text }}</div>
                <div>(+25%)</div>
              </div>
            </template>
            <template #[`item.contacts`]="{ item }">
              <ul
                v-if="!item.editable"
                class="d-inline-flex flex-column"
                style="list-style: none"
              >
                <li
                  v-for="contacts in item.contacts"
                  :key="contacts.name"
                  class="d-flex flex-wrap"
                  style="gap: 0.2rem"
                >
                  <div class="subtitle-2">{{ contacts.name }}</div>
                  <a class="subtitle-2" :href="'mail:' + contacts?.mail">{{
                      contacts.mail
                    }}</a>
                  <div class="subtitle-2">{{ contacts.phone }}</div>
                </li>
              </ul>

              <ul v-else style="list-style: none">
                <li
                  v-for="(contacts, index) in item.contacts"
                  :key="index"
                  class="d-flex flex-column"
                  style="gap: 0.2rem"
                >
                  <v-text-field
                    v-model="contacts.name"
                    small
                    :label="$t('name')"
                    required
                    hide-details
                  />
                  <v-text-field
                    v-model="contacts.mail"
                    small
                    :label="$t('mail')"
                    required
                    hide-details
                  />
                  <v-text-field
                    v-model="contacts.phone"
                    small
                    :label="$t('phone')"
                    required
                    hide-details
                  />
                </li>
                <li class="d-flex flex-column subtitle-2" style="gap: 0.2rem">
                  <div>
                    <v-btn
                      class="flex-grow-0 mb-2"
                      small
                      color="success"
                      @click="
                        item.contacts.push({
                          name: '',
                          mail: '',
                          phone: '',
                        })
                      "
                    >
                      <v-icon size="15">mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </li>
              </ul>
            </template>
            <template #[`item.current_peer`]="{ item }">
              <div v-if="!item.editable">{{ item.current_peer }}</div>
              <v-text-field
                v-else
                v-model="item.current_peer"
                small
                label=""
                required
                type="number"
                min="0"
                max="9999"
                :rules="[
                  (val) => val > 0 || 'This field must be greater than 0',
                ]"
              />
            </template>
            <template #[`item.high_critical_peer`]="{ item }">
              <div v-if="!item.editable">{{ item.high_critical_peer }}</div>
              <v-text-field
                v-else
                v-model="item.high_critical_peer"
                small
                label=""
                required
                type="number"
                min="0"
                max="9999"
                :rules="[
                  (val) => val > 0 || 'This field must be greater than 0',
                ]"
              />
            </template>
            <template #[`item.low_critical_peer`]="{ item }">
              <div v-if="!item.editable">{{ item.low_critical_peer }}</div>
              <v-text-field
                v-else
                v-model="item.low_critical_peer"
                small
                label=""
                required
                type="number"
                min="0"
                max="2000"
                :rules="[
                  (val) => val > 0 || 'This field must be greater than 0',
                ]"
              />
            </template>
            <template #[`item.is_alert`]="{ item }">
              <div v-if="!item.editable">{{ item.is_alert }}</div>
              <v-switch
                v-else
                v-model="item.is_alert"
                small
                label=""
                required
                color="info"
                :true-value="'Yes'"
                :false-value="'No'"
              />
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import items from '~/assets/json/peering-bgp-status.json';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'DomesticAndInternationalBgpPeering',
  layout: 'admin-layout',
  data() {
    return {
      statusMap,
      items: items.map((item) => ({
        ...item,
        editable: false,
      })),
    };
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
          text: this.$t('peering.name'),
          value: 'peering_name',
        },
        {
          text: this.$t('Peer IP'),
          value: 'ip',
        },
        {
          text: this.$t('peering.device'),
          value: 'device',
        },
        {
          text: this.$t('contact.info'),
          value: 'contacts',
        },
        {
          text: this.$t('Peer ASN'),
          value: 'current_peer',
        },
        {
          text: this.$t('high.critical.peer'),
          value: 'high_critical_peer',
        },
        {
          text: this.$t('low.critical.peer'),
          value: 'low_critical_peer',
        },
        {
          text: this.$t('interface.alerting'),
          value: 'is_alert',
        },
      ];
    },
  },
};
</script>

