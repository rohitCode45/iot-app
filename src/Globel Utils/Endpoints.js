// export const WebSocketUrl = 'ws://192.168.29.96:8080/websocket_fiu'


const socketUrlconfig = window.socketUrlconfig
console.log('socketUrlconfig', socketUrlconfig)
export const WebSocketUrl = socketUrlconfig?.fiuSocketUrl ?? ''
export const WebSocketUrl_fds = socketUrlconfig?.fdsSocketUrl ?? ''