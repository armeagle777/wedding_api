"use strict";

/**
 * guest controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::guest.guest", ({ strapi }) => ({
  async getByUid(ctx) {
    try {
      const { uid } = ctx.params;
      const guest = await strapi.service("api::guest.guest").findByUid(uid);
      return guest;
    } catch (error) {
      ctx.status = 400;
      ctx.body = error;
    }
  },
}));
