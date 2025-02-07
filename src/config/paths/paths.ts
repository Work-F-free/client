export const paths = {
  lending: {
    path: "/",
  },

  agrageted: {
    path: "/agrageted",
    coworking_list: function () {

      return `${this.path}/list/coworking`
    },
    coworking_id: function (id?: number | string) {
      if (id) {
        return `${this.path}/list/coworking/${id}`;
      }
      
      return `${this.path}/list/coworking/:id`
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
