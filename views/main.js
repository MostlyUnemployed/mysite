var html = require('choo/html')

var TITLE = 'mysite - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
        <h1>Welcome 2 my site</h1>
        <p>Visit some of the other sites that I have made:</p>
        <ul>
          <li><a href='http://206.189.40.114/files'>Site #1</a></li>
        </ul>
      </main>
    </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }
}
