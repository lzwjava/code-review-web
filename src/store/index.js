import Firebase from 'firebase'
import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const itemsCache = Object.create(null)
const store = new EventEmitter()
const storiesPerPage = store.storiesPerPage = 30

let topStoryIds = []

export default store

