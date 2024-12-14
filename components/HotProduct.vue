<template>
  <div class="d-flex flex-column flex-sm-row">
    <v-hover v-slot="{ hover }">
      <div style="position: relative">
        <v-img
          width="300"
          height="300"
          max-width="300"
          max-height="300"
          :lazy-src="img"
          :src="img"
          sizes="100%"
        />
        <v-slide-y-reverse-transition>
          <div
            v-if="hover"
            class="d-flex justify-center align-center mx-auto"
            style="
              background: #0009;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
          >
            <v-btn outlined color="white" dark>{{ $t('more') }}</v-btn>
          </div>
        </v-slide-y-reverse-transition>
      </div>
    </v-hover>
    <div class="py-0 py-sm-5 px-2 d-flex flex-sm-column" style="gap: 1rem">
      <div>
        <h6 class="text-subtitle-1 text-md-h6 font-weight-bold orange--text">
          {{ title }}
        </h6>
        <p class="text-subtitle-2 black--text2">
          {{ detail }}
        </p>
      </div>
      <v-btn text class="text-subtitle-2 orange black--text rounded-0" small
        ><span class="text-subtitle-1 font-weight-bold text-uppercase">{{
          $t('more')
        }}</span>
      </v-btn>
    </div>
  </div>
</template>
<script lang="js">
export default {
  name: 'HotProduct',
  props:{
    img:{
      type: String,
    },
    title:{
      type: String,
    },
    detail:{
      type: String,
    },
  }
};
</script>
