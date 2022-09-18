import { useState, ChangeEvent, FormEvent } from "react"
import { Button, Form, Input } from "semantic-ui-react"

const QueueForm = ({queue, setQueue}) => {
  const [current, setCurrent] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const newPerson = event.target.value
    setCurrent(() => newPerson)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const time = new Date()
    setQueue([
      ...queue,
      { name: current, time: `${time.getHours()}:${time.getMinutes()}` },
    ])
    setCurrent('')
  }

  return (
    <Form onSubmit={handleSubmit}>
    <Input placeholder="Nimimerkki" value={current} onChange={handleChange} />
    {"  "}
    <Button>Lisää</Button>
  </Form>
  )
}

export default QueueForm