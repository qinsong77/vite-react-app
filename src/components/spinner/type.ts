export enum SpinnerColor {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
}

export enum SpinnerSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface SpinnerProps {
  color?: SpinnerColor
  size?: SpinnerSize
}
