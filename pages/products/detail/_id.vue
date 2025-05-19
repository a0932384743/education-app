<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-img
      :src="windowSize > 600 ? '/image/bg11.png' : '/image/mobile-bg11.png'"
      width="100%"
      :height="windowSize > 600 ? 360 : 195"
      position="left bottom"
    />
    <v-container class="px-0">
      <v-breadcrumbs
        :items="menus"
        class="pt-0"
        :style="{
          marginBottom: windowSize > 600 ? '150px' : '10px',
        }"
      >
        <template #divider>
          <v-icon color="#ba9545">mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <div class="title px-4 px-md-0">
        <h1 class="mb-2">
          {{ title }}
        </h1>
        <hr class="double-color-hr" />
      </div>
      <div class="product-intro py-16">
        <div class="product-img d-flex align-center pa-16 pa-sm-0">
          <v-img
            :src="product.img"
            width="80%"
            height="80%"
            class="mx-auto"
            contain
          />
        </div>
        <div class="d-flex flex-column px-4 px-sm-12">
          <h1 class="mb-2">
            {{ product.name }}
          </h1>
          <hr class="double-color-hr" />
          <p class="text-sm-end sub-title mt-2">
            {{ $t('word12') }}: {{ product.desc }}
          </p>
          <div class="d-flex flex-column flex-grow-1 justify-end mt-10 mt-sm-0">
            <p>{{ $t('word13') }}: {{ product.origin }}</p>
            <p>{{ $t('word14') }}: {{ product.sales.join(',') }}</p>
          </div>
          <div class="pt-10 btn-group">
            <v-btn color="#D8AE5E" dark @click="onAddToCart">
              {{ $t('word15') }}
            </v-btn>
            <v-btn color="#D8AE5E" dark @click="onGoToList">
              {{ $t('word11') }}
            </v-btn>
          </div>
        </div>
      </div>
      <div class="py-2 py-sm-16" />
      <div class="title px-4 px-md-0">
        <h1 class="mb-2">
          {{ $t('word16') }}
        </h1>
        <hr class="double-color-hr" />
        <v-simple-table dense class="py-10 py-sm-16 px-sm-16">
          <thead>
            <tr>
              <th class="white--text pa-4">
                <h2
                  v-if="lang === 'zh-tw'"
                  class="text-center"
                  style="letter-spacing: 10px"
                >
                  自由內徑
                </h2>
                <component
                  :is="lang === 'en' ? 'h2' : 'h3'"
                  class="text-center"
                >
                  Free Inner Diameter
                </component>
              </th>
              <th class="white--text pa-4">
                <h2
                  v-if="lang === 'zh-tw'"
                  class="text-center"
                  style="letter-spacing: 10px"
                >
                  最大內徑
                </h2>
                <component
                  :is="lang === 'en' ? 'h2' : 'h3'"
                  class="text-center"
                >
                  Max Inner Diameter
                </component>
              </th>
              <th class="white--text pa-4">
                <h2
                  v-if="lang === 'zh-tw'"
                  class="text-center"
                  style="letter-spacing: 10px"
                >
                  規格
                </h2>
                <component
                  :is="lang === 'en' ? 'h2' : 'h3'"
                  class="text-center"
                >
                  Specification
                </component>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in items" :key="i">
              <td>{{ item.free }}</td>
              <td>{{ item.max }}</td>
              <td>{{ item.spec }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
      <div class="py-10 py-sm-16" />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Item, Product, items } from '../../../dummy';

@Component({
  name: 'product-detail',
  layout: 'default-layout',
  asyncData() {
    return { items };
  },
})
export default class productDetail extends Vue {
  readonly title: string = '農機用管束商品';
  readonly product: Product = {
    id: 1,
    name: '管束',
    img: '/image/icon1.png',
    desc: 'YF-104',
    count: 100,
    origin: '台灣',
    sales: ['製造', '批發', 'ODM/OEM'],
  };

  readonly items: Item[] = items;

  get menus() {
    return [
      { text: this.$t('home'), disabled: false, href: '/' },
      { text: this.$t('products.intro'), disabled: false, href: '/products' },
      { text: '農機用管束商品', disabled: true },
    ];
  }

  get lang() {
    return this.$i18n.locale;
  }

  onAddToCart() {
    this.$router.push('/cart');
  }

  onGoToList() {
    this.$router.push('/products');
  }
}
</script>
<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 40px;
  line-height: 100%;

  @media screen and (max-width: 780px) {
    & {
      font-size: 20px;
    }
  }
}

h2 {
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;

  @media screen and (max-width: 780px) {
    & {
      font-size: 15px;
    }
  }
}

h3 {
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;

  @media screen and (max-width: 780px) {
    & {
      font-size: 12px;
    }
  }
}

.product-intro {
  display: grid;
  grid-template-columns: 720px 1fr;

  @media screen and (max-width: 780px) {
    & {
      grid-template-columns: 1fr;
    }
  }
}

.product-img {
  box-shadow: 3px 4px 8px 0 #00000040;

  @media screen and (max-width: 780px) {
    & {
      box-shadow: none;
    }

    & > * {
      box-shadow: 3px 4px 8px 0 #00000040;
    }
  }
}

.sub-title {
  width: 100%;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;

  @media screen and (max-width: 780px) {
    & {
      font-size: 12px;
    }
  }
}

p {
  width: 100%;
  font-size: 24px;
  line-height: 100%;

  @media screen and (max-width: 780px) {
    & {
      font-size: 14px;
    }
  }
}

.btn-group {
  gap: 20px;
  display: flex;

  @media screen and (max-width: 780px) {
    & {
      flex-direction: column;
    }
  }

  button {
    flex: 1 1 auto;
    min-height: 60px;

    ::v-deep .v-btn__content {
      font-family: Kufam, serif;
      font-weight: 700;
      font-size: 20px;
      line-height: 100%;
    }

    @media screen and (max-width: 780px) {
      & {
        width: 140px;
        min-height: 35px;
        margin: auto;

        ::v-deep .v-btn__content {
          font-size: 12px;
        }
      }
    }
  }
}

th {
  background: #d8ae5e;
  font-family: Kufam, serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  text-align: center;
}

td {
  font-family: Kufam, serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 5px;
  text-align: center;
  border: 1px solid #ba9545;
  border-right: none;

  &:last-child {
    border-right: 1px solid #ba9545;
  }
}
</style>
