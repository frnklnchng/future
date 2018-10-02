import idiom from 'idiom.js'

const lang = idiom({
  'default': {
    'welcome': 'future'
  }
})

export default lang(window.navigator.language)
