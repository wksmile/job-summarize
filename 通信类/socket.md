##### websocket的工作原理和机制？
Websocket是应用层第七层上的一个应用层协议，它必须依赖 HTTP 协议进行一次握手 ，握手成功后，数据就直接从 TCP 通道传输，与 HTTP 无关了。WebSocket是类似Socket的TCP长连接的通讯模式，一旦WebSocket连接建立后，后续数据都以帧序列的形式传输。

”Upgrade：websocket”参数值表明这是WebSocket类型请求，“Sec-WebSocket-Key”是WebSocket客户端发送的一个base64编码的密文，要求服务端必须返回一个对应加密的“Sec-WebSocket-Accept”应答，否则客户端会抛出“Error during WebSocket handshake”错误，并关闭连接。

[参考](http://www.6gdown.com/softedupage/59485.html)


##### socket如何实现通信？





