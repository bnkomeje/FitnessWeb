type FitnessTipItemProps = {
  tip: string
  onRemove: () => void
}

// Displays one fitness tip with a remove button.
function FitnessTipItem({ tip, onRemove }: FitnessTipItemProps) {
  return (
    <li>
      <span>{tip}</span>
      <button type="button" onClick={onRemove}>
        Remove
      </button>
    </li>
  )
}

export default FitnessTipItem