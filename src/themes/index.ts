import base from './base'
import dark from './dark'
import pastel from './pastel'
import navy from './navy'
import { IThemes, rgbToHex } from './utils'

export const DEFAULT_THEME: string = 'base'

export const CURRENT_THEME = {
  primary: rgbToHex(base.primary),
  secondary: rgbToHex(base.secondary),
  background: rgbToHex(base.background),
  primaryText: rgbToHex(base.primaryText),
  complementary: rgbToHex(base.complementary),
  secondaryText: rgbToHex(base.secondaryText)
}

export const themes: IThemes = {
  base,
  dark,
  navy,
  pastel
}
