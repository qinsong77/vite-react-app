import { faker } from '@faker-js/faker'
import { defineConfig } from 'orval'

export default defineConfig({
  petstore: {
    output: {
      baseUrl: '/v3',
      target: 'src/service/petstore/endpoint.ts',
      schemas: 'src/service/petstore/model',
      mock: true,
      mode: 'split',
      // prettier: true,
      override: {
        mutator: {
          path: 'src/service/axios/index.ts',
          name: 'createRequest',
        },
        operations: {
          listPets: {
            mock: {
              properties: () => {
                return {
                  '[].id': () => faker.number.int({ min: 1, max: 99999 }),
                }
              },
            },
          },
          showPetById: {
            mock: {
              data: () => ({
                id: faker.number.int({ min: 1, max: 99 }),
                name: faker.person.firstName(),
                tag: faker.helpers.arrayElement([
                  faker.word.sample(),
                  undefined,
                ]),
              }),
            },
          },
        },
        mock: {
          properties: {
            tags: [],
            // '/tag|name/': () => faker.person.lastName(),
          },
        },
      },
    },
    input: {
      target: 'https://petstore3.swagger.io/api/v3/openapi.json',
      override: {
        // transformer: 'src/service/transformer/add-version.js',
      },
    },
    hooks: {
      // afterAllFilesWrite: ['eslint --fix'],
    },
  },
})
