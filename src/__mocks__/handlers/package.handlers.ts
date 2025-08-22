import { HttpResponse, delay, http } from 'msw'

export const packageHandlers = [
  http.get('/api/customer/getPackageLocation', async ({ request }) => {
    await delay(3 * 1000)
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    return HttpResponse.json({
      id: id,
      latitude: Math.ceil(Math.random() * 100 + Math.random() * 80),
      longitude: Math.ceil(Math.random() * 100 + Math.random() * 80),
    })
  }),
]
