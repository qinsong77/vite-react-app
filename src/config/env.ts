import * as z from 'zod'

const createEnv = () => {
  const EnvSchema = z.object({
    BASE_URL: z.string().default(import.meta.env.BASE_URL),
    API_BASE_URL: z.string().default('/api'),
    MSW_ENABLE: z
      .enum(['true', 'false'])
      .transform((s) => s === 'true')
      .optional(),
  })

  const envVars = Object.entries(import.meta.env).reduce<
    Record<string, string>
  >((acc, [key, value]) => {
    if (key.startsWith('VITE_APP_')) {
      acc[key.replace('VITE_APP_', '')] = value as string
    }
    return acc
  }, {})

  const parsedEnv = EnvSchema.safeParse(envVars)

  if (!parsedEnv.success) {
    const errorTree = z.treeifyError(parsedEnv.error)
    throw new Error(
      `Invalid env provided.
The following variables are missing or invalid:
${Object.entries(errorTree.properties ?? {})
  .map(([k, v]) => `- ${k}: ${v.errors.join(', ')}`)
  .join('\n')}
`
    )
  }

  return parsedEnv.data
}

export const env = createEnv()
