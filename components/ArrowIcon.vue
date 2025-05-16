<template>
  <svg
    width="47"
    height="12"
    viewBox="0 0 47 12"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      v-if="direction === 'left'"
      d="M0 6L10 11.7735V0.226497L0 6ZM46 7C46.5523 7 47 6.55228 47 6C47 5.44772 46.5523 5 46 5V7ZM9 7H46V5H9V7Z"
    />
    <path
      v-if="direction === 'right'"
      d="M1 5C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7V5ZM47 6L37 0.226497V11.7735L47 6ZM1 7H38V5H1V7Z"
    />
  </svg>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'ArrowIcon',
})
export default class ArrowIcon extends Vue {
  @Prop({ required: true, default: 'left', type: String })
  readonly direction!: 'right' | 'left';
}
</script>
