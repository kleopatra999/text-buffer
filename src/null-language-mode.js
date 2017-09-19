const {Disposable} = require('event-kit')
const Point = require('./point')

const EMPTY = []

module.exports =
class NullLanguageMode {
  bufferDidChange () {}
  buildHighlightIterator () { return new NullHighlightIterator }
  getInvalidatedRanges() { return EMPTY }
  onDidChangeHighlighting () { return new Disposable(() => {}) }
}

class NullHighlightIterator {
  seek (position) { return EMPTY }
  moveToSuccessor() { return false }
  getPosition() { return Point.INFINITY }
  getCloseTags() { return EMPTY }
  getOpenTags() { return EMPTY }
}
