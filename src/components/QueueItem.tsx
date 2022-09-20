import {
  List,
  Button,
  ListContent,
  ListHeader,
  ListDescription,
  Icon,
} from 'semantic-ui-react'
import RemoveButton from './RemoveButton'

const QueueItem = ({ queue, setQueue, time, name, idx }) => {
  const moveInQueue = (di) => {
    return () => {
      const newQueue = [...queue]
      const sum = Math.min(idx + di, queue.length - 1)
      const element = queue[sum]
      newQueue[idx] = element
      if (element.name !== name) {
        newQueue[sum] = { name, time }
      }
      setQueue(newQueue)
    }
  }

  return (
    <List.Item className="person">
      <List.Content floated="right">
        <Button className="remove-btn" onClick={moveInQueue(-1)}>
          <Icon name="arrow up" />
        </Button>
        <Button className="remove-btn" onClick={moveInQueue(1)}>
          <Icon name="arrow down" />
        </Button>
        <RemoveButton setQueue={setQueue} queue={queue} name={name} />
      </List.Content>
      <ListContent>
        <ListHeader className="capitalized">{name}</ListHeader>
        <ListDescription>{time}</ListDescription>
      </ListContent>
    </List.Item>
  )
}

export default QueueItem
