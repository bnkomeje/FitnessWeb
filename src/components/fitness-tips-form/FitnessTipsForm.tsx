type FitnessTipsFormProps = {
  newTip: string
  setNewTip: (tip: string) => void
  onAdd: () => void
}

/**
 * Shows the form for adding a fitness tip.
 */
function FitnessTipsForm({ newTip, setNewTip, onAdd }: FitnessTipsFormProps) {
  return (
    <form>
      <label htmlFor="fitness-tip">Add a Fitness Tip:</label>

      <input
        id="fitness-tip"
        type="text"
        value={newTip}
        onChange={(event) => setNewTip(event.target.value)}
        placeholder="Enter a fitness tip"
      />

      <button type="button" onClick={onAdd}>
        Add Tip
        </button>
        
    </form>
  )
}

export default FitnessTipsForm