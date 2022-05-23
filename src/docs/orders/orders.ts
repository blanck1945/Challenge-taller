export default {
  // method of operation
  get: {
    tags: ["Orders operations"], // operation's tag.
    description: "Get orders", // operation's desc.
    operationId: "get-orders", // unique operation id.
    parameters: [], // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: "Orders were obtained", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Orders", // Orders model
            },
          },
        },
      },
    },
  },
};
