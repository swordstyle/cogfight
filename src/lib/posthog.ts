import { PostHog } from 'posthog-js'

let posthogInstance: PostHog | undefined

export const getPostHog = (): PostHog | undefined => {
  if (typeof window === 'undefined') return undefined

  if (!posthogInstance) {
    const posthog = require('posthog-js')
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      loaded: (posthog: PostHog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      }
    })
    posthogInstance = posthog
  }

  return posthogInstance
}

export const trackEvent = (event: string, properties?: Record<string, any>) => {
  const posthog = getPostHog()
  if (posthog) {
    posthog.capture(event, properties)
  }
}