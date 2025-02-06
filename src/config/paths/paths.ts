export const paths = {
  lending: {
    path: "/",
  },

  list: {
    path: "/list",
    coworking: function (id?: number | string) {
      if (id) {
        return `${this.path}/coworking/${id}`;
      }
    },
  },
  
  app: {
    path: "/app",
    profile: function () {
      return `${this.path}/profile`;
    },
    coworking: function (id?: number | string) {
      if (id) {
        return `${this.path}/coworking/${id}`;
      }

      return `${this.path}/coworking/:action?`;
    },
  },
};
