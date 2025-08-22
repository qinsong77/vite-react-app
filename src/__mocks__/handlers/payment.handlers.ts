import { HttpResponse, delay, http } from 'msw'

export const paymentHandlers = [
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
