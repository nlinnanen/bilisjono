import {
  Container,
  Divider,
  Header,
  List
} from 'semantic-ui-react'
import { useLocalStorage } from 'use-hooks'
import PersonOnBoard from './components/PersonOnTable'
import QueueForm from './components/QueueForm'
import QueueItem from './components/QueueItem'
import { QueueType } from './types'



function App() {
  const [queue, setQueue] = useLocalStorage<QueueType[]>('jono', [])



  return (
    <Container
      className="container"
      style={{ marginTop: 50, paddingLeft: '100px', paddingRight: '100px' }}
    >
      <Header size="huge">Bilisjono</Header>
      <QueueForm queue={queue} setQueue={setQueue} />
      <Divider />
      <PersonOnBoard queue={queue} setQueue={setQueue} />
      <Header size="large">Jono</Header>
      <Divider style={{marginBottom: -10}}/>
      <List divided relaxed ordered>
        {queue.slice(2).map((item, i) => (
          <QueueItem key={`${item.name}${item.time}`}queue={queue} setQueue={setQueue} name={item.name} time={item.time} idx={i+2}/>
        ))}
      </List>
    </Container>
  )
}

export default App
