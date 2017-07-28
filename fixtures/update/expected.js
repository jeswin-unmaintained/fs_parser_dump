module.exports = {
  type: "update",
  predicate: {
    type: "LogicalExpression",
    operator: "&&",
    left: {
      field: "dir",
      comprandNode: {
        type: "Identifier",
        name: "documents"
      },
      right: {
        field: "filename",
        comprandNode: {
          type: "Identifier",
          name: "report.txt"
        }
      }
    }
  },
  fields: [
    type: "ObjectProperty",
    method: false,
    field: "contents",
    valueNode: {
      type: "Identifier",
      name: "hello, universe"
    }
  ],
  source: {
    type: "query",
    module: "todosFsModule",
    identifier: "myFs"
  }
}
