import { themes } from './index'

export interface ITheme {
  [key: string]: string;
}

export interface IThemes {
  [key: string]: ITheme;
}

export interface IMappedTheme {
  [key: string]: string | null;
}

export const mapTheme = (variables: ITheme): IMappedTheme => {
  return {
    '--color-navbar': variables?.secondary || '',
    '--color-primary': variables?.primary || '',
    '--color-secondary': variables?.secondary || '',
    '--color-complementary': variables?.complementary || '',
    '--color-background-primary': variables?.background || '',
    '--color-text-primary': variables?.primaryText || '',
    '--color-text-secondary': variables?.secondaryText || ''
  }
}

export const applyTheme = (theme : string | ITheme): void => {
  let selectedTheme = typeof theme === 'object' ? theme : themes[theme]

  if (typeof theme !== 'object' && !themes[theme]) {
    selectedTheme = themes.base
  }

  if (typeof theme === 'object') {
    Object.keys(selectedTheme).forEach((key, index) => {
      const rgb: any = hexToRgb(selectedTheme[key])
      selectedTheme[key] = `${rgb.r}, ${rgb.g}, ${rgb.b}`
    })
  }

  const themeObject: IMappedTheme = mapTheme(selectedTheme)
  if (!themeObject) return

  const root = document.documentElement

  Object.keys(themeObject).forEach((property) => {
    if (property === 'name') {
      return
    }
    root.style.setProperty(property, themeObject[property])
  })
}

export const extend = (
  extending: ITheme,
  newTheme: ITheme
): ITheme => {
  return { ...extending, ...newTheme }
}

export function rgbToHex (rgb: string) {
  if (!rgb) return ''
  const r = rgb?.split(', ')[0]
  const g = rgb?.split(', ')[1]
  const b = rgb?.split(', ')[2]
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

export function componentToHex (c: string) {
  const hex = Math.abs(Number(c)).toString(16)
  return hex.length === 1 ? '0' + hex : hex
}

export function hexToRgb (hex: any) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : ''
}
