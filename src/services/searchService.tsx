
export function validateSearch(value: string): {
  isValid: boolean
  errors: string[]
} {
  const search = value.trim()

  if (search.length === 1) {
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
