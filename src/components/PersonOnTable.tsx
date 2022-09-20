import { Button, Grid, Header, Icon } from 'semantic-ui-react'
import { QueueType } from '../types'
import RemoveButton from './RemoveButton'

interface PropType {
  queue: QueueType[]
  setQueue: (a: QueueType[]) => void
}

const flexStyles = {
  display: 'flex',
  justifyContent: 'space-between',
}

const PersonOnBoard = ({ queue, setQueue }: PropType) => {
  const handleWin = (loser) => {
    const time = new Date()
    setQueue([
      ...queue.filter((n) => n.name !== loser),
      { name: loser, time: `${time.getHours()}:${time.getMinutes()}` },
    ])
  }

  if (queue.length < 2) {
    return null
  }

  return (
    <div style={flexStyles}>
      <div className="person on-board" style={{ textAlign: 'left', justifyContent: "left" }}>
        <Header className="on-board-header capitalized">{queue[0].name}</Header>
        <RemoveButton setQueue={setQueue} queue={queue} name={queue[0].name} />
      </div>
      <div>
        <div style={{ textAlign: 'center' }}>
          <Header>Voittaja?</Header>
        </div>
        <div>
          <Button.Group>
            <Button onClick={() => handleWin(queue[1].name)}>
              <Icon name="chevron left" />
            </Button>
            <Button.Or text="vs" />
            <Button onClick={() => handleWin(queue[0].name)}>
              <Icon name="chevron right" />
            </Button>
          </Button.Group>
        </div>
      </div>
      <div
        className="person on-board"
        style={{ textAlign: 'right', justifyContent: 'right' }}
      >
        <RemoveButton setQueue={setQueue} queue={queue} name={queue[1].name} />
        <Header className="on-board-header capitalized">{queue[1].name}</Header>
      </div>
    </div>
  )
}

export default PersonOnBoard
