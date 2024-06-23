/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Types
import type { App } from "vue";

// Plugins
import vuetify from "./vuetify";
import store from "../store";
import router from "../router";

// Components
import * as Componets from "../components";
const installer = (app: App) => {
  Object.values(Componets).forEach((component) => {
    app.component(component.__name || "unkonwn", component);
  });
};

export function registerPlugins(app: App) {
  app.use(vuetify).use(store).use(router).use(installer);
}
