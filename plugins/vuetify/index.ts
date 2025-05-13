import Vuetify from 'vuetify/lib';
import FacebookIcon from '../../components/FacebookIcon.vue';
import YoutubeIcon from '../../components/YoutubeIcon.vue';
import LineIcon from '../../components/LineIcon.vue';
import InstagramIcon from '../../components/InstagramIcon.vue';

export default new Vuetify({
  icons: {
    values: {
      facebook: {
        component: FacebookIcon,
      },
      youtube: {
        component: YoutubeIcon,
      },
      line: {
        component: LineIcon,
      },
      instagram: {
        component: InstagramIcon,
      },
    },
  },
});
