export const paths = {
  lending: {
    path: "/",
  },

  app: {
    path: "/app",
    profile: function () {
      return `${this.path}/profile`;
    },
  },
};
