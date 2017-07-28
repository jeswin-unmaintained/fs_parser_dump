module.exports = {
  type: "deleteFile",
  predicate: {
    type: "LogicalExpression",
    operator: "&&"
    left: {
      type: "binaryFieldExpression",
      operator: "===",
      field: "dir",
      comprandNode: {
        type: "Identifier",
        name: "documents"
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
}
