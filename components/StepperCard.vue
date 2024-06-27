<template>
  <v-card>
    <v-card-title class="flex-nowrap">
      <span class="font-weight-bold text-truncate">{{ $t(title) }}</span>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-divider />
    <v-card-text class="pb-8">
      <v-stepper
        v-model="step"
        alt-labels
        :elevation="0"
        :outlined="false"
        :rounded="false"
        :tile="true"
      >
        <v-stepper-header :elevation="0">
          <template v-for="(item, index) in items">
            <v-stepper-step :key="item.name" :step="index + 1">
              {{ item.name }}
            </v-stepper-step>
            <v-divider :key="`${item.name}_divider`" v-if="index < (items?.length -1)"></v-divider>
          </template>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content
            v-for="(item, index) in items"
            :key="`${item.name}_content`"
            :step="index + 1"
          >
            <div>
              <slot :name="'step' + (index + 1)" />
            </div>
            <div class="d-inline-flex mt-2 w-100 justify-space-between" style="gap: 0.5rem">
              <span v-if="step <= 1"></span>
              <v-btn
                v-if="step > 1"
                color="info"
                class="align-self-start"
                @click="step = index"
              >
                {{ $t('previous') }}
              </v-btn>
              <v-btn
                v-if="step < items.length"
                class="align-self-end"
                color="info"
                @click="step = index + 2"
              >
                {{ $t('next') }}
              </v-btn>
              <v-btn
                v-if="step === items.length"
                class="align-self-end"
                color="info"
                @click="onSubmit"
              >
                {{ $t('submit') }}
              </v-btn>
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'StepperCard',
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
      step: 1,
    };
  },
  methods: {
    onSubmit() {
      this.$emit('submit', true);
    },
  },
};
</script>
