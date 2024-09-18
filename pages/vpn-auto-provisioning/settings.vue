<template>
  <v-container fluid>
    <v-form class="d-flex flex-column" style="gap: 2rem">
      <v-card class="px-10 py-5">
        <v-row>
          <v-col cols="12">
            <h3>點對點VPN連線：</h3>
          </v-col>
          <v-col cols="12" sm="4">
            <v-select
              v-model="applicantUnit"
              color="info"
              label="申請單位"
              :items="['台大計算機中心']"
            ></v-select>
          </v-col>

          <!-- VLAN ID -->
          <v-col cols="12" sm="4">
            <v-select
              v-model="vlanID"
              color="info"
              label="VLAN ID"
              :items="[
                { text: '100 (已指配)', disabled: true },
                { text: '101 (已指配)', disabled: true },
                { text: '102 (已指配)', disabled: true },
                { text: '103', disabled: false },
                { text: '104', disabled: false },
                { text: '105', disabled: false },
              ]"
            ></v-select>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="px-10 py-5">
        <!-- 甲端 -->
        <v-row>
          <v-col cols="12">
            <h3>甲端：</h3>
          </v-col>

          <v-col cols="12" sm="4">
            <v-select
              v-model="gigaPOP_A"
              color="info"
              label="區網中心"
              :items="['臺大GigaPOP']"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="4">
            <v-select
              v-model="pe1_A"
              color="info"
              label="PE1"
              :items="['xe-1/0/0']"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="4">
            <v-select
              v-model="pe2_A"
              color="info"
              label="PE2"
              :items="['xe-1/0/0']"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="4">
            <v-select
              v-model="ce_A"
              color="info"
              label="ce_A"
              :items="['ae0']"
            ></v-select>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="px-10 py-5">
        <!-- 乙端 -->
        <v-row>
          <v-col cols="12">
            <h3>乙端：</h3>
          </v-col>

          <v-col cols="12" sm="4">
            <v-select
              v-model="gigaPOP_B"
              color="info"
              label="區網中心"
              :items="['中山GigaPOP']"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="4">
            <v-select
              v-model="pe1_B"
              color="info"
              label="PE1"
              :items="['xe-1/3/0']"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="4">
            <v-select
              v-model="pe2_B"
              color="info"
              label="PE2"
              :items="['xe-1/3/0']"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="4">
            <v-select
              v-model="ce_B"
              color="info"
              label="CE"
              :items="['ae0']"
            ></v-select>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'VPNAutoProvisioningSettings',
  layout: 'admin-layout',
  data() {
    return {
      applicantUnit: '',
      vlanID: '',
      gigaPOP_A: '',
      pe1_A: '',
      pe2_A: '',
      ce_A: '',
      gigaPOP_B: '',
      pe1_B: '',
      pe2_B: '',
      ce_B: '',
    };
  },
};
</script>
