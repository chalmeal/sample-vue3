<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useStore } from "../store/store";

const store = useStore();

const item = ref({ modal: false, message: "" });

const color = computed(() => {
  if (store.api.status === 200) {
    return "green lighten-1";
  } else {
    return "red-darken-1";
  }
});

watch(store.api, () => {
  item.value.modal = true;
  item.value.message = store.api.message;
});

const onSnackbar = (v: boolean) => {
  if (!v) {
    item.value.message = "";
  }
};
</script>

<template>
  <v-snackbar
    v-model="item.modal"
    location="top center"
    :color="color"
    :timeout="2000"
    @update:modelValue="onSnackbar"
  >
    <span class="text-white">
      {{ item.message }}
    </span>
  </v-snackbar>
</template>
