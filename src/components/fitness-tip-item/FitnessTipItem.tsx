
import { useState } from 'react'

type FitnessTipItemProps = {
  tip: string
  onRemove: () => void
  onEdit: (text: string) => void
}

/**
 * Shows a fitness tip with edit and remove buttons
 */
function FitnessTipItem({ tip, onRemove, onEdit }: FitnessTipItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(tip)

  const saveTip = () => {
    try {
      onEdit(editedText)
      setIsEditing(false)
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            value={editedText}
            onChange={e => setEditedText(e.target.value)}
          />
          <button type="button" onClick={saveTip}>
            Save
          </button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span>{tip}</span>
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button type="button" onClick={onRemove}>
            Remove
          </button>
        </>
      )}
    </li>
  )
}

export default FitnessTipItem
