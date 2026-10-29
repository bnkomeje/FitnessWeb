export function validateFitnessTip(input: string): string {
  const tip = input.trim()

  if (tip.length < 5 || !/[a-zA-Z]/.test(tip)) {
    throw new Error('Please enter a fitness tip (at least 5 characters)')
  }

  return tip
}
