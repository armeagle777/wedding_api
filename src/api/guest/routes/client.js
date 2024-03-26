module.exports = {
  routes: [
    {
      method: "GET",
      path: "/guests/:uid",
      handler: "guest.getByUid",
    },
  ],
};
