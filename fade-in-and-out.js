module.exports = function (RED) {
  function FadeInAndOut(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    let counter = 0;

    node.on('input', function (msg) {
      counter++;
      msg.payload = counter;

      node.status({text: `Count: ${counter}`})
      node.send(msg);
    })
  }

  RED.nodes.registerType("fade-in-and-out", FadeInAndOut)
}
