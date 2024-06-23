<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../../store/store";

const router = useRouter();
const store = useStore();

var param = ref({
  accountId: null,
  password: null,
});

const onLogin = () => {
  // api.login()
  console.log(param.value.accountId);
  console.log(param.value.password);
  ref((store.logined = true));
  router.push("/home");
};
</script>

<template>
  <div class="content-main-center mt-12" rounded>
    <v-card class="card-main" width="35vw" elevation="15">
      <v-card-title class="text-head">Login</v-card-title>
      <v-form @submit.prevent="onLogin">
        <v-row class="content-center" density="compact">
          <v-text-field
            v-model="param.accountId"
            label="AccountID"
            color="primary"
            max-width="25vw"
          ></v-text-field>
        </v-row>
        <v-row class="content-center" density="compact">
          <v-text-field
            v-model="param.password"
            label="Password"
            color="primary"
            max-width="25vw"
            :type="'password'"
          ></v-text-field>
        </v-row>
        <v-row class="content-center mt-10" density="comapct">
          <v-btn
            color="primary"
            size="large"
            type="submit"
            variant="elevated"
            block
            rounded
          >
            Login
          </v-btn>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>
