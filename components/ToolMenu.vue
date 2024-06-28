<template>
  <v-navigation-drawer
    :value="drawer"
    app
    right
    color="aside"
    dark
    width="300"
    temporary
    @input="updateDrawer"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-right">
          <v-btn icon @click="updateDrawer(false)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="my-3" />
    <v-list dense>
      <v-list-item>
        <v-list-item-content>
          <v-subheader>Themes Setting</v-subheader>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-row class="mx-0">
          <v-col cols="12">
            <v-btn-toggle :value="theme" @change="updateTheme">
              <v-btn :value="false" color="info" small>Light</v-btn>
              <v-btn :value="true" color="info" small>Dark</v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
      </v-list-item>
      <v-divider class="my-3" />
      <v-list-item>
        <v-subheader>Header Setting</v-subheader>
      </v-list-item>
      <v-list-item>
        <v-row class="mx-0">
          <v-col cols="12">
            <v-slider
              v-model="headerSettings.elevation"
              label="Elevation"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12">
            <v-slider
              v-model="headerSettings.height"
              label="Height"
              hide-details
              :min="1"
              :max="100"
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12">
            <v-select
              v-model="headerSettings.color"
              :items="colors"
              hide-details
              label="Color"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="headerSettings.dense"
              label="Dense"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="headerSettings.outline"
              label="Outlined"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="headerSettings.flat"
              label="Flat"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="headerSettings.prominent"
              label="Prominent"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="headerSettings.rounded"
              label="Rounded"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="headerSettings.shaped"
              label="Shaped"
              color="info"
              hide-details
              class="mt-0"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="headerSettings.absolute"
              label="Absolute"
              color="info"
              hide-details
              class="mt-0"
            />
          </v-col>
        </v-row>
      </v-list-item>
      <v-divider class="my-3" />

      <v-list-item>
        <v-subheader>Footer Setting</v-subheader>
      </v-list-item>
      <v-list-item>
        <v-row class="mx-0">
          <v-col cols="12">
            <v-slider
              v-model="footerSettings.elevation"
              label="Elevation"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12">
            <v-slider
              v-model="footerSettings.height"
              label="Height"
              hide-details
              color="info"
              class="mt-0"
              :min="1"
              :max="100"
            />
          </v-col>
          <v-col cols="12">
            <v-select
              v-model="footerSettings.color"
              :items="colors"
              hide-details
              label="Color"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="footerSettings.absolute"
              label="Absolute"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="footerSettings.outline"
              label="Outlined"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="footerSettings.shaped"
              label="Shaped"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="footerSettings.clipped"
              label="Clipped"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="footerSettings.padless"
              label="Padless"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
        </v-row>
      </v-list-item>
      <v-divider class="my-3" />
      <v-list-item>
        <v-subheader>Side Menu Setting</v-subheader>
      </v-list-item>
      <v-list-item>
        <v-row class="mx-0">
          <v-col cols="12">
            <v-slider
              v-model="sideMenuSettings.width"
              :max="300"
              label="Width"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12">
            <v-select
              v-model="sideMenuSettings.color"
              :items="colors"
              hide-details
              label="Color"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="sideMenuSettings.clipped"
              label="Clipped"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="sideMenuSettings.absolute"
              label="Absolute"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="sideMenuSettings.miniVariant"
              label="MiniVariant"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="headerSettings.permanent"
              label="Permanent"
              hide-details
              color="info"
              class="mt-0"
            />
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import colors from '~/utils/color';
export default {
  name: 'ToolMenu',
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    colors() {
      return colors;
    },
    theme() {
      return this.$vuetify.theme.dark;
    },
    headerSettings() {
      return this.$store.getters['common/getHeaderSetting'];
    },
    footerSettings() {
      return this.$store.getters['common/getFooterSetting'];
    },
    sideMenuSettings() {
      return this.$store.getters['common/getSideMenuSetting'];
    },
  },
  methods: {
    updateTheme(value) {
      this.$vuetify.theme.dark = value;
    },
    updateDrawer(value) {
      this.$emit('update:drawer', value);
    },
  },
};
</script>
