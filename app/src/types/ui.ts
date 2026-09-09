export type ImageFormat = 'webp' | 'jpg' | 'png'

export type GlitchAnimation = 'c-glitch-digital' | 'c-glitch-matrix'

export interface IconProps {
  size?: number
  label?: string
}

export type SocialPlatform = 'linkedin' | 'github'

export type SocialProfiles = Record<SocialPlatform, { label: string; href: string }>
