
export function validateSearch(value: string): {
  isValid: boolean
  errors: string[]
} {
  if (value.trim().length === 1) {
    return {
      isValid: false,
      errors: ['Enter at least two characters to search.']
    }
  }

  return {
    isValid: true,
    errors: []
  }
}
