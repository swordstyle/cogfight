import { PostHog } from 'posthog-js'

let posthogInstance: PostHog | undefined

export const getPostHog = (): PostHog | undefined => {
  if (typeof window === 'undefined') return undefined

  if (!posthogInstance && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    try {
      const posthog = require('posthog-js')
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
        loaded: (posthog: PostHog) => {
          if (process.env.NODE_ENV === 'development') posthog.debug()
        }
      })
      posthogInstance = posthog
    } catch (error) {
      console.warn('PostHog initialization failed:', error)
    }
  }

  return posthogInstance
}

export const trackEvent = (event: string, properties?: Record<string, any>) => {
  try {
    const posthog = getPostHog()
    if (posthog) {
      posthog.capture(event, properties)
    }
  } catch (error) {
    console.warn('PostHog tracking failed:', error)
  }
}