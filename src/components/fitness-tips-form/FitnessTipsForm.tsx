type FitnessTipsFormProps = {
  newTip: string
  setNewTip: (tip: string) => void
}

function FitnessTipsForm({ newTip, setNewTip }: FitnessTipsFormProps) {
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
    </form>
  )
}

export default FitnessTipsForm