module.exports = {
  type: "getFilesRecursively",
  predicate: {
    type: "LogicalExpression",
    left: {
      type: "binaryFieldExpression"
      operator: "||",
      field: "dir",
      comparandNode: {
        type: "Identifier",
        name: "/some/path"
      }
    },
    right: {
      "type": "query",
      "method": "startsWith",
      field: "dir",
      comprandNode: {
        type: "Identifier",
        name: "/some/path/"
      }
    }
  },
  source: {
    type: "query",
    module: "todosFsModule",
    identifier: "myFs"
  }
}
