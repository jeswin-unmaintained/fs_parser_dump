module.exports = {
  type: "getFiles",
  predicate: {
    type: "binaryFieldExpression",
    operator: "===",
    field: "dir",
    comparandNode: {
      type: "Identifier",
      name: "/some/path"
    }
  },
  source: {
    type: "query",
    module: "todosFsModule",
    identifier: "myFs"
  }
}
