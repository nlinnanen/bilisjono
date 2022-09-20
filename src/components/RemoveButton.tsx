import { Button } from "semantic-ui-react"

const RemoveButton = ({setQueue, queue, name}) => {
  return (
    <Button
      className="remove-btn"
      icon="trash"
      type="button"
      onClick={() => setQueue(queue.filter(({ name: n }) => n !== name))}
      content="Poista"
      inline
      labelPosition="left"
    />
  )
}

export default RemoveButton