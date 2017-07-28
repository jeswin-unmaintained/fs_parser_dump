module.exports = {
  type: "read",
  predicate: {
    type: "LogicalExpression",
    operator: "&&",
    left: {
      type: "binaryFieldExpression",
      operator: "===",
      field: "dir",
      comprandNode: {
        type: "Identifier",
        name: "/some/path"
      }
    },
    right: {
      type: "binaryFieldExpression",
      operator: "===",
      field: "filename",
      comprandNode: {
        type: "Identifier",
        name: "report.txt"
      }
    }
  },
  source: {
    type: "query",
    module: "todosFsModule",
    identifier: "myFs"
  }
};
