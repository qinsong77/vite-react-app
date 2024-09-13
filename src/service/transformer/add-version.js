/**
 * Transformer function for orval.
 * https://github.com/orval-labs/orval/blob/master/samples/basic/api/transformer/add-version.js
 * @param {OpenAPIObject} inputSchema
 * @return {OpenAPIObject}
 */
module.exports = (inputSchema) => ({
  ...inputSchema,
  paths: Object.entries(inputSchema.paths).reduce(
    (acc, [path, pathItem]) => ({
      ...acc,
      [`v{version}${path}`]: Object.entries(pathItem).reduce(
        (pathItemAcc, [verb, operation]) => ({
          ...pathItemAcc,
          [verb]: {
            ...operation,
            parameters: [
              ...(operation.parameters || []),
              {
                name: 'version',
                in: 'path',
                required: true,
                schema: {
                  type: 'number',
                  default: 1,
                },
              },
            ],
          },
        }),
        {}
      ),
    }),
    {}
  ),
})
