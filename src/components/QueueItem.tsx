import {
  List,
  Button,
  ListContent,
  ListHeader,
  ListDescription,
  Icon,
} from 'semantic-ui-react'

const QueueItem = ({ queue, setQueue, time, name, idx }) => {

  const moveInQueue = (di) => {
    return () => {
      const newQueue = [...queue]
      const sum = Math.min(idx + di, queue.length - 1)
      const element = queue[sum]
      newQueue[idx] = element
      if(element.name !== name ) {
        newQueue[sum] = {name, time}
      }
      setQueue(newQueue)
    }
  }

  return (
    <List.Item className="person">
      <List.Content floated="right">
        <Button  className='remove-btn'onClick={moveInQueue(-1)}>
          <Icon name="arrow up" />
        </Button>
        <Button className='remove-btn' onClick={moveInQueue(1)}>
          <Icon name="arrow down" />
        </Button>
        <Button
          className="remove-btn"
          icon="trash"
          type="button"
          onClick={() => setQueue(queue.filter(({ name: n }) => n !== name))}
          content="Poista"
          labelPosition="left"
        />
      </List.Content>
      <ListContent>
        <ListHeader className="capitalized">{name}</ListHeader>
        <ListDescription>{time}</ListDescription>
      </ListContent>
    </List.Item>
  )
}

export default QueueItem
