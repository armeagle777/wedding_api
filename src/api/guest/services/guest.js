"use strict";

/**
 * guest service
 */

const { createCoreService } = require("@strapi/strapi").factories;
const { encryptId, decryptId } = require("../helpers");

module.exports = createCoreService("api::guest.guest", ({ strapi }) => ({
  async findByUid(uid) {
    // const fakeId = encryptId(uid);
    // console.log("fakeId", fakeId);
    const id = decryptId(uid);
    const data = await strapi.entityService.findOne("api::guest.guest", id, {
      fields: ["firstName", "lastName", "guestCount", "confirmed", "tableNum"],
    });
    return data;
  },
}));
