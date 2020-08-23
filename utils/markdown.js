import showdown from 'showdown'
import showdownHighlight from 'showdown-highlight'

const markdown = new showdown.Converter({
  omitExtraWLInCodeBlocks: true,
  ghCompatibleHeaderId: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tables: true,
  ghCodeBlocks: true,
  smartIndentationFix: true,
  simpleLineBreaks: true,
  ghMentions: true,
  encodeEmails: true,
  openLinksInNewWindow: true,
  emoji: true,
  literalMidWordUnderscores: true,
  extensions: [showdownHighlight],
})

export default markdown
