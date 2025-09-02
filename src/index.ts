import type { Core } from "@strapi/strapi";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {
    // let routes = [];
    // for (const [_, api] of Object.entries(strapi.apis)) {
    //   for (const [_, route] of Object.entries(api.routes)) {
    //     console.log("routes: ", api.routes)
    //     routes.push(route.routes);
    //   }
    // }

    // console.log("###################")
    // console.dir(routes)
    // console.log("###################")

  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
