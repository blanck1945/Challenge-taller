import getOrders from "./orders";

export default {
  paths: {
    "/orders/index": {
      ...getOrders,
    },
  },
};
