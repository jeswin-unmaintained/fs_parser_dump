module.exports = {
  type: "create",
  itemsNode: {
    type: "ObjectExpression",
    properties: [
      {
        type: "ObjectProperty",
        method: false,
        key: {
          type: "Identifier",
          name: "dir"
        },
        value: {
          type: "Identifier",
          name: "documents"
        }
      },
      {
        type: "ObjectProperty",
        method: false,
        key: {
          type: "Identifier",
          name: "filename"
        },
        value: {
          type: "Identifier",
          name: "report.txt"
        }
      }
      {
        type: "ObjectProperty",
        method: false,
        key: {
          type: "Identifier",
          name: "contents"
        },
        value: {
          type: "Identifier",
          name: "hello, world"
        }
      }
    ]
  },
  source: {
    type: "query",
    module: "todosFsModule",
    identifier: "myFs"
    // ,path: "todos"
  }
}
