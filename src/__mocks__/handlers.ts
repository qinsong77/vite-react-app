import { HttpResponse, delay, graphql, http } from 'msw'

import { getSwaggerPetstoreOpenAPI30Mock } from '@/service/petstore/endpoint.msw'

export const handlers = [
  ...getSwaggerPetstoreOpenAPI30Mock(),
  http.get('https://api.example.com/user', () => {
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
  graphql.query('ListMovies', () => {
    return HttpResponse.json({
      data: {
        movies: [
          {
            title: 'The Lord of The Rings',
          },
          {
            title: 'The Matrix',
          },
          {
            title: 'Star Wars: The Empire Strikes Back',
          },
        ],
      },
    })
  }),

  http.get('/api/customer/getPackageLocation', async ({ params }) => {
    await delay(3 * 1000)
    return HttpResponse.json({
      id: params.id,
      latitude: Math.ceil(Math.random() * 100 + Math.random() * 80),
      longitude: Math.ceil(Math.random() * 100 + Math.random() * 80),
    })
  }),

  // custom
  http.options(
    'https://5a2f495fa871f00012678d70.mockapi.io/api/payment-methods',
    () => {
      return new Response(null, {
        status: 200,
        headers: {
          Allow: 'GET,HEAD,POST',
        },
      })
    }
  ),
  http.get(
    'https://5a2f495fa871f00012678d70.mockapi.io/api/payment-methods',
    async () => {
      await delay()
      return HttpResponse.json([
        {
          name: 'apple',
          countryCode: 'AU',
          id: '1',
        },
        {
          name: 'google',
          countryCode: 'AU',
          id: '2',
        },
      ])
    }
  ),
]
