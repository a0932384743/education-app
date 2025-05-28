<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-img
      :src="windowSize > 600 ? '/image/bg11.png' : '/image/mobile-bg11.png'"
      width="100%"
      :height="windowSize > 600 ? 360 : 195"
      position="left bottom"
    />
    <v-container class="px-0 mx-auto" style="max-width: 1360px">
      <v-breadcrumbs
        :items="menus"
        class="pt-0"
        :style="{
          marginBottom: windowSize > 600 ? '140px' : '10px',
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
      <div class="product-intro">
        <div class="product-img d-flex align-center">
          <v-img :src="product.img" class="mx-auto" width="100%" contain />
        </div>
        <div class="d-flex flex-column product-detail">
          <h1 class="mb-2">
            {{ product.name }}
          </h1>
          <hr class="double-color-hr" />
          <p class="text-sm-end sub-title mt-2">
            {{ $t('word12') }}: {{ product.desc }}
          </p>
          <div
            class="d-flex flex-column flex-grow-1 justify-end product-detail-paragraph"
          >
            <div>{{ $t('word13') }}: {{ product.origin }}</div>
            <div>{{ $t('word14') }}: {{ product.sales.join(',') }}</div>
          </div>
          <div class="btn-group">
            <v-btn color="#D8AE5E" dark :min-height="windowSize > 600 ? '60px' : '35px'" :min-width="windowSize > 600 ? '235px' : '137px'" @click="onAddToCart">
              {{ $t('word15') }}
            </v-btn>
            <v-btn color="#D8AE5E" dark :min-height="windowSize > 600 ? '60px' : '35px'" :min-width="windowSize > 600 ? '235px' : '137px'" @click="onGoToList">
              {{ $t('word11') }}
            </v-btn>
          </div>
        </div>
      </div>
      <div class="product-table">
        <div class="title px-4 px-md-0">
          <h1 class="mb-2">
            {{ $t('word16') }}
          </h1>
          <hr class="double-color-hr" />
          <v-simple-table
            dense
            style="max-width: 960px"
            class="mx-auto"
            :style="{
              marginTop: windowSize > 600 ? '92px' : '20px',
            }"
          >
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
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Item, Product, items } from '../../../dummy';
import { EXTRA_SIZE } from '../../../utils/themes';

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

  windowSize: number = EXTRA_SIZE;

  onAddToCart() {
    this.$router.push('/cart');
  }

  onGoToList() {
    this.$router.push('/products');
  }

  handleResize() {
    this.windowSize = window.innerWidth;
  }

  mounted() {
    this.$nextTick(this.handleResize);
    window.addEventListener('resize', this.handleResize);
  }

  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>
<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 40px;
  line-height: 180%;
  letter-spacing: 5px;

  @media screen and (max-width: 600px) {
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
  padding: 115px 0 130px 0;
  grid-template-columns: 720px 1fr;

  @media screen and (max-width: 960px) {
    & {
      padding: 0 0 60px 0;
      grid-template-columns: 1fr;
    }
  }
}

.product-img {
  box-shadow: 3px 4px 8px 0 #00000040;

  ::v-deep .v-image {
    .v-image__image {
      background-size: auto 90%;
    }
  }

  @media screen and (max-width: 960px) {
    & {
       margin: 45px 73px;
    }
  }
}

.product-detail {
  padding: 20px 93px 70px 93px;

  @media screen and (max-width: 960px) {
    & {
      padding: 0 20px;
    }
  }
}

.product-detail-paragraph {
  margin-bottom: 65px;

  * {
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: 5px;
    white-space: nowrap;
  }

  @media screen and (max-width: 960px) {
    & {
      margin-top: 40px;
      margin-bottom: 40px;
      * {
        font-size: 13.21px;
      }
    }
  }
}

.sub-title {
  width: 100%;
  font-weight: 500;
  font-size: 24px;

  @media screen and (max-width: 780px) {
    & {
      font-size: 12px;
    }
  }
}

.btn-group {
  gap: 30px;
  display: flex;

  @media screen and (max-width: 780px) {
    & {
      gap: 15px;
      flex-direction: column;
    }
  }

  button {
    flex: 1 1 auto;

    ::v-deep .v-btn__content {
      font-family: Kufam, serif;
      font-weight: 700;
      font-size: 20px;
      line-height: 100%;
    }

    @media screen and (max-width: 780px) {
      & {
        margin: auto;

        ::v-deep .v-btn__content {
          font-size: 12px;
        }
      }
    }
  }
}

.product-table {
  padding-bottom: 165px;
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
  letter-spacing: 8px;
  text-align: center;
  border: 1px solid #ba9545;
  border-right: none;
  padding: 5px;

  &:last-child {
    border-right: 1px solid #ba9545;
  }
}
</style>
