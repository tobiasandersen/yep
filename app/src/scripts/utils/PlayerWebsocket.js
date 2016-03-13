export default class PlayerWebSocket {
  constructor(url, dispatcher) {
    this.websocket = new WebSocket(`ws://${url}`)

    this.websocket.onmessage = function(message) {
      dispatcher(JSON.parse(message.data))
    }
  }

  send(event) {
    this.websocket.send(JSON.stringify(event))
  }

  startGame(game) {
    this.websocket.send(
      JSON.stringify({
        event_type: 1,
        game
      })
    )
  }

  addPlayer(name) {
    this.websocket.send(
      JSON.stringify({
        event_type: 2,
        name
      })
    )
  }

  buzz(playerId) {
    this.send({
      event_type: 3,
      playerId
    })
  }

  close() {
    this.websocket.close()
  }
}
