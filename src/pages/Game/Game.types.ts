export type AlignProp = 'left' | 'right' | 'top' | 'bottom' | 'center'
export interface HorizontalSymmetryProps {
  horizontalAlign: Exclude<AlignProp, 'top' | 'bottom' | 'center'>
}
export interface SymmetryProps {
  align: AlignProp
}
export type GameStateProp = 'before' | 'ing' | 'after' | 'error'
