<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-img
      :src="windowSize > 600 ? '/image/bg14.png' : '/image/mobile-bg14.png'"
      width="100%"
      :height="windowSize > 600 ? 360 : 195"
      position="left bottom"
    />
    <v-container class="px-4">
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
          {{ $t('word20') }}
        </h1>
        <hr class="double-color-hr" />
      </div>
      <div class="d-flex flex-column px-4 px-md-0">
        <v-list class="mb-8 mb-sm-12">
          <v-list-item
            v-for="product in products"
            :key="product.id"
            class="px-0"
          >
            <v-list-item-icon>
              <v-img
                :src="product.img"
                :alt="product.name"
                :width="windowSize > 600 ? 200 : 150"
                :height="windowSize > 600 ? 200 : 150"
              >
              </v-img>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <p>{{ product.name }}</p>
                <p>{{ $t('word12') }}:{{ product.desc }}</p>
              </v-list-item-title>
            </v-list-item-content>
            <v-btn text class="align-self-start align-self-sm-center">
              <v-icon color="#BA9545" :size="windowSize > 600 ?50 : 24">mdi-close-box</v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
        <v-card rounded="0" class="px-10 py-12" color="#D8AE5E" outlined>
          <v-form>
            <div
              class="d-flex flex-column flex-sm-row"
              :style="{ gap: windowSize > 600 ? '10px' : '0px' }"
            >
              <div class="flex-grow-1 form-group">
                <v-text-field
                  :label="$t('word19') + ' *'"
                  required
                  outlined
                  single-line
                  light
                  color="#BA9545"
                  background-color="#FFF"
                  :dense="windowSize < 600"
                ></v-text-field>
              </div>
              <div class="flex-grow-1 form-group">
                <v-text-field
                  :label="$t('tel') + ' *'"
                  required
                  outlined
                  single-line
                  light
                  color="#BA9545"
                  background-color="#FFF"
                  :dense="windowSize < 600"
                ></v-text-field>
              </div>
            </div>
            <div class="flex-grow-1 form-group">
              <v-text-field
                label="E-mail *"
                required
                outlined
                single-line
                color="#BA9545"
                background-color="#FFF"
                :dense="windowSize < 600"
              ></v-text-field>
            </div>
            <div class="flex-grow-1 form-group">
              <v-text-field
                :label="$t('address') + ' *'"
                outlined
                single-line
                light
                color="#BA9545"
                background-color="#FFF"
                :dense="windowSize < 600"
              ></v-text-field>
            </div>
            <div class="flex-grow-1 form-group">
              <v-textarea
                :label="$t('word23') + ' *'"
                required
                outlined
                single-line
                light
                color="#BA9545"
                background-color="#FFF"
                :dense="windowSize < 600"
              ></v-textarea>
            </div>
          </v-form>
          <div class="d-flex mt-5 justify-end align-center" style="gap: 10px">
            <v-btn color="#FFF" class="rounded-0">{{ $t('word21') }}</v-btn>
            <v-btn color="#FFF" class="rounded-0">{{ $t('word22') }}</v-btn>
          </div>
        </v-card>
      </div>
    </v-container>
    <div class="py-sm-16"></div>
    <div class="py-16"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { EXTRA_SIZE } from '../utils/themes';
import { Product, cartProducts } from '../dummy';

@Component({
  name: 'cart',
  layout: 'default-layout',
  asyncData() {
    return {
      products: cartProducts,
    };
  },
})
export default class Cart extends Vue {
  products: Product[] = cartProducts;

  windowSize: number = EXTRA_SIZE;

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
  line-height: 100%;

  @media screen and (max-width: 780px) {
    & {
      font-size: 20px;
    }
  }
}

p {
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 2px;
  margin-bottom: 5px;

  @media screen and (max-width: 780px) {
    & {
      font-size: 14px;
    }
  }
}

button {
  min-width: 145px !important;
  min-height: 50px !important;

  @media screen and (max-width: 600px) {
    & {
      min-width: 80px !important;
      min-height: 27px !important;
    }
  }
  ::v-deep .v-btn__content {
    font-family: Kufam, serif;
    font-weight: 700;
    font-size: 20px;
    color: #ba9545;
  }

  @media screen and (max-width: 600px) {
    & {
      ::v-deep .v-btn__content {
        font-size: 12px;
      }
    }
  }
}

::v-deep .v-list-item {
  border-bottom: 1px solid #d8ae5e;
}
</style>
