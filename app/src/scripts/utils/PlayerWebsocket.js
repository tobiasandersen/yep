export default class PlayerWebSocket {
  constructor(url, dispatcher) {
    this.websocket = new WebSocket(`ws://${url}`)

    this.websocket.onmessage = function(message) {
      const action = JSON.parse(message.data)

      console.log('onmessage', action)
      dispatcher(action)
    }
  }

  createNewGame() {
    console.log('createNewGame')
    this.websocket.send(
      JSON.stringify({
        event_type: 1,
        gameId: 1
      })
    )
  }

  addPlayer(name) {
    console.log('add player', name)
    this.websocket.send(
      JSON.stringify({
        event_type: 2,
        name
      })
    )
  }

  close() {
    this.websocket.close()
  }
}
