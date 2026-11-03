
import { useEffect, useState } from 'react'
import * as SearchService from '../services/searchService'

/**
 * Reusable search presentation hook.
 *
 * searchValue: text currently entered.
 * setSearchValue: updates the input.
 * searchTerm: validated text after a 500ms delay.
 * error: search validation message.
 * clearSearch: clears the search input.
 */
export function useSearch() {
  const [searchValue, setSearchValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = SearchService.validateSearch(searchValue)

      if (result.isValid) {
        setSearchTerm(searchValue.trim())
        setError('')
      } else {
        setSearchTerm('')
        setError(result.errors.join(' '))
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [searchValue])

  function clearSearch() {
    setSearchValue('')
    setSearchTerm('')
    setError('')
  }

  return {
    searchValue,
    setSearchValue,
    searchTerm,
    error,
    clearSearch
  }
}
