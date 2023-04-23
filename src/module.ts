import {
  defineNuxtModule,
  // createResolver,
  addComponent,
  addImports,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@deegital/@deegital/nuxt-trustup-io-toasteo",
    configKey: "toasteo",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    // const resolver = createResolver(import.meta.url);

    addComponent({
      name: "TrustupIoToasteo",
      export: "NotificationContainer",
      filePath: "@deegital/vue-trustup-io-toasteo",
    });

    addImports({
      name: "useToasteo",
      from: "@deegital/vue-trustup-io-toasteo",
    });
  },
});
