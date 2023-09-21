// decoder.js
let decodedText = ''
export function decoder(codeText) {
  for (let i = 0; i < codeText.length; i++) {
    const decodeText = codeText.charCodeAt(i) - 9
    decodedText += String.fromCharCode(decodeText)
  }
  return decodedText
}
