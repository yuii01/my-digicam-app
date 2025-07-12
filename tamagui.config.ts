import { createInterFont } from '@tamagui/font-inter'
import { createTamagui } from 'tamagui'

const font = createInterFont()

const config = createTamagui({
  theme: {
    color: {
      background: '#fff',
      backgroundStrong: '#f0f0f0',
      color: '#111',
      colorHover: '#000',
      colorPress: '#222',
      borderColor: '#ccc',
    },
    radius: {
      sm: 4,
      md: 8,
      lg: 16,
    },
    size: {
      sm: 12,
      md: 16,
      lg: 20,
      xl: 24,
    },
    space: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    zIndex: {
      modal: 100,
      popover: 50,
    },
  },
  fonts: {
    body: font,
  },
  shorthands: {
    p: 'padding',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    m: 'margin',
    mx: 'marginHorizontal',
    my: 'marginVertical',
  },
  tokens: {
    color: {
      primary: '#6366F1',
      secondary: '#F59E0B',
      background: '#ffffff',
      text: '#000000',
    },
    radius: {
      small: 4,
      medium: 8,
      large: 16,
    },
    size: {
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      6: 24,
      7: 32,
      8: 40,
      9: 48,
      10: 64,
    },
  },
  themes: {
    light: {
      background: '#fff',
      color: '#111',
      primary: '#6366F1',
    },
    dark: {
      background: '#000',
      color: '#fff',
      primary: '#8b5cf6',
    },
  },
  defaultTheme: 'light',
})

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
