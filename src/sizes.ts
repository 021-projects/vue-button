import { computed, ComputedRef } from 'vue'

export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const sizes: Record<TSize, number> = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}

const fontSizes: Record<TSize, number> = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 19,
  xl: 23
}

export function useSize ( size: TSize ): ComputedRef<{
  fontSize: string;
  padding: string;
}> {
  return computed(() => ({
    fontSize: `${fontSizes[size]}px`,
    padding: sizes[size] / 2 + 'px ' + sizes[size] + 'px'
  }))
}

export function loadingSpinnerSize ( size: TSize ): ComputedRef<{
  size: number;
}> {
  return computed(() => ({
    size: fontSizes[size]
  }))
}

export { sizes, fontSizes }
