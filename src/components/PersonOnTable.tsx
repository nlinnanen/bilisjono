import { Button, Grid, Header, Icon } from 'semantic-ui-react'
import { QueueType } from '../types'

interface PropType {
  queue: QueueType[]
  setQueue: (a: QueueType[]) => void
}

const flexStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
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
      <Grid.Column floated="left">
        <Header className='capitalized'>{queue[0].name}</Header>
      </Grid.Column>
      <Grid.Column textAlign="center" stretched>
        <div style={{textAlign: "center"}}><Header >Voittaja?</Header></div>
        <div>
          <Button.Group>
            <Button onClick={() => handleWin(queue[1].name)} ><Icon name="chevron left" /></Button>
            <Button.Or text="vs" />
            <Button onClick={() => handleWin(queue[0].name)}  ><Icon name="chevron right" /></Button>
          </Button.Group>
        </div>
      </Grid.Column>
      <Grid.Column floated="right">
        <Header className='capitalized'>{queue[1].name}</Header>
      </Grid.Column>
    </div>
  )
}

export default PersonOnBoard
