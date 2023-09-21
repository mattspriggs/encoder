// main.js
import { encode } from './encode.js'
import { decoder } from './decode.js'

const input = document.getElementById('PlainTextArea')
const output = document.getElementById('CodedText')
const decodeInput = document.getElementById('decodeTextArea')
const decodeOutput = document.getElementById('decodeText')

input.addEventListener('change', (event) => {
  const plaintext = input.value
  const codedText = encode(plaintext)
  output.textContent = codedText
  decodeOutput.textContent = decoder(codedText)
})
