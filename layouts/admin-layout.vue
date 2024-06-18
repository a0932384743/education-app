<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app color="aside" width="310">
      <v-list-item
        active-class="info"
        dark
        :style="{
          height: `${vuetify.application.top}px`,
        }"
      >
        <v-list-item-content class="py-1">
          <v-img
            class="mx-auto"
            contain
            lazy-src="/logo-2.png"
            max-width="120"
            :alt="title"
            src="/logo-2.png"
          ></v-img>
        </v-list-item-content>
      </v-list-item>

      <v-list
        nav
        dense
        color="aside"
        class="overflow-auto"
        :style="{
          height: `calc(100% - ${vuetify.application.top}px)`,
        }"
      >
        <template v-for="menu in menus">
          <v-list-group
            v-if="menu.children && menu.children.length"
            :key="JSON.stringify(menu)"
            active-class="info"
            sub-group
          >
            <template #prependIcon>
              <v-icon size="20" class="white--text"
                >mdi-view-grid-outline</v-icon
              >
            </template>
            <template #appendIcon>
              <v-icon size="20" class="white--text">mdi-menu-left</v-icon>
            </template>
            <template #activator>
              <v-list-item-content>
                <v-list-item-title class="white--text">{{
                  menu.name
                }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <template v-for="children1 in menu.children">
              <v-list-group
                v-if="children1.children && children1.children.length"
                :key="JSON.stringify(children1)"
                active-class="info"
                sub-group
              >
                <template #prependIcon>
                  <v-icon size="20" class="white--text"></v-icon>
                </template>
                <template #appendIcon>
                  <v-icon size="20" class="white--text">mdi-menu-left</v-icon>
                </template>
                <template #activator>
                  <v-list-item-content>
                    <v-list-item-title class="white--text">{{
                      children1.name
                    }}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="children2 in children1.children"
                  :key="JSON.stringify(children2)"
                  :to="children2.url"
                  :link="false"
                >
                  <v-list-item-content>
                    <v-list-item-title class="white--text">{{
                      children2.name
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-item
                v-else
                :key="JSON.stringify(children1)"
                :to="children1.url"
              >
                <v-list-item-content>
                  <v-list-item-title class="white--text">{{
                    children1.name
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
          <v-list-item v-else :key="JSON.stringify(menu)" :to="menu.url">
            <v-list-item-icon class="mr-1">
              <v-icon size="20" class="white--text"
                >mdi-view-grid-outline</v-icon
              >
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{
                menu.name
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="header">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div
        class="align-center justify-center flex-grow-0 d-flex px-2"
        style="gap: 0.6rem"
      >
        <v-icon size="24"> mdi-clock </v-icon>
        <span class="font-italic font-weight-bold">{{ date }}</span>
        <span>|</span>
        <span>TIME: {{ time }}</span>
      </div>
      <div class="align-center justify-center flex-grow-0 d-flex px-2">
        <v-btn text> <v-icon size="24"> mdi-account </v-icon> User</v-btn>
      </div>
      <div
        class="align-center justify-center flex-grow-0 d-flex px-2"
        style="gap: 0.6rem"
      >
        <v-btn text> Logout </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-breadcrumbs
        light
        class="justify-end"
        :items="[
          {
            text: 'Home',
            href: '/',
          },
          ...items,
        ]"
      >
        <template #item="{ item }">
          <v-breadcrumbs-item tag="a" :to="item.href" :disabled="item.disabled">
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import moment from 'moment/moment'
import menus from '@/assets/json/menu.json'

export default {
  name: 'AdminLayout',
  layout: 'AdminLayout',
  data() {
    return {
      drawer: false,
      timer: 0,
      time: moment().format('HH:mm:ss'),
      title: 'TWAREN 100G INMS',
      items: [],
    }
  },
  computed: {
    flatMenu() {
      const flatList = []
      function flatten(item) {
        flatList.push({
          icon: item.icon,
          name: item.name,
          url: item.url,
        })
        if (item.children && item.children.length > 0) {
          item.children.forEach(flatten)
        }
      }
      menus.forEach(flatten)
      return flatList
    },
    vuetify() {
      return this.$vuetify
    },
    date() {
      return moment().format('ddd MMM DD YYYY')
    },
    menus() {
      return menus
    },
  },
  watch: {
    $route(to) {
      this.items = this.flatMenu
        .filter((f) => f.url === to.path)
        .map((m) => {
          return {
            text: m.name,
            href: m.url,
            disabled: true,
          }
        })
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.time = moment().format('HH:mm:ss')
    }, 1000)

    this.items = this.flatMenu
      .filter((f) => f.url === this.$router.currentRoute.path)
      .map((m) => {
        return {
          text: m.name,
          href: m.url,
          disabled: true,
        }
      })
  },
  beforeDestroy() {
    // 在组件销毁前清除定时器
    clearInterval(this.timer)
  },
}
</script>
<style lang="scss">
.aside {
  .v-list-item__icon {
    margin-right: 10px !important;
  }
  .v-list-item--link:before {
    background-color: transparent;
  }
  .v-list-group--active
    > .v-list-group__header
    > .v-list-group__header__append-icon
    .v-icon {
    transform: rotate(-90deg);
  }

  .v-list-group--sub-group > .v-list-item {
    padding-left: 8px !important;
  }
}

a.v-breadcrumbs__item {
  color: black !important;
}

a.v-breadcrumbs__item--disabled {
  color: rgba(0, 0, 0, 0.38) !important;
}
</style>
