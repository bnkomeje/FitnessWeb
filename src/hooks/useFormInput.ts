
import { useState } from 'react'

/**
 * Manages text input for forms.
 * value: current input text.
 * setValue: updates the input text.
 * clearValue: clears the input text.
 */
export function useFormInput(initialValue = '') {
  const [value, setValue] = useState(initialValue)

  const clearValue = () => {
    setValue('')
  }

  return { value, setValue, clearValue }
}
