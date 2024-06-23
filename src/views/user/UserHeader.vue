<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../../store/store";

const router = useRouter();
const store = useStore();

const drawer = ref(false);
const avator = ref(store.account.avator);
var logined = ref(store.logined);

watchEffect(() => {
  logined.value = ref(store.logined).value;
});

const onLogout = () => {
  ref((store.logined = false));
  router.push("/login");
};
</script>

<template>
  <v-app-bar color="teal-lighten-1" elevation="1" prominent>
    <v-app-bar-nav-icon
      v-if="logined"
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title class="title-head mx-auto">
      sample-vue-ui
    </v-toolbar-title>
    <v-menu v-if="logined" min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn class="mr-3" v-bind="props" icon>
          <v-avatar v-if="avator" :image="store.account.avator"></v-avatar>
          <v-avatar
            v-else
            color="blue-grey-lighten-2"
            :image="store.account.avator"
          >
            <v-icon icon="mdi-account-circle" size="large"></v-icon>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-list-item @click="onLogout"> Logout </v-list-item>
      </v-card>
    </v-menu>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    color="teal-lighten-2"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    temporary
  >
    <v-list :lines="false" density="compact" nav>
      <v-list-item @click="router.push('/home')" height="120">
        <template v-slot:prepend>
          <v-icon>mdi-home</v-icon>
        </template>
        <v-list-item-title>
          <div class="text-130p">Home</div>
        </v-list-item-title>
      </v-list-item>
      <v-divider :thickness="2" class="border-opacity-25"></v-divider>
      <v-list-item @click="router.push('/todo')" height="120">
        <template v-slot:prepend>
          <v-icon>mdi-pencil</v-icon>
        </template>
        <v-list-item-title>
          <div class="text-130p">Todo</div>
        </v-list-item-title>
      </v-list-item>
      <v-divider :thickness="2" class="border-opacity-25"></v-divider>
      <v-list-item @click="router.push('/account')" height="120">
        <template v-slot:prepend>
          <v-icon>mdi-account</v-icon>
        </template>
        <v-list-item-title>
          <div class="text-130p">Account</div>
        </v-list-item-title>
      </v-list-item>
      <v-divider :thickness="2" class="border-opacity-25"></v-divider>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.title-head {
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  color: rgb(255, 255, 255);
}
</style>
