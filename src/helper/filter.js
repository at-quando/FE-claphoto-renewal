import Vue from 'vue'
import * as moment from 'moment'

Vue.filter('capitalize', function (value) {
  return value.replace(/\b\w/g, l => l.toUpperCase())
})

Vue.filter('takeImage', function (value) {
  return process.env.SERVER_IP + value
})

Vue.filter('smallGoogleImage', function (value) {
  return `https://drive.google.com/thumbnail?id=${value}&sz=w300-h300`
})

Vue.filter('mediumGoogleImage', function (value) {
  return `https://drive.google.com/thumbnail?id=${value}&sz=w2048-h1365`
})

Vue.filter('fullGoogleImage', function (value) {
  return `https://drive.google.com/uc?export=view&id=${value}`
})

Vue.filter('moment', function (date) {
  return moment(date).fromNow()
})

Vue.filter('limit_description', function (graph) {
  if (graph.length > 100) {
    return graph.substr(0, 100) + '...'
  }
  return graph
})

Vue.filter('limit_review_content', function (graph) {
  if (graph.length > 100) {
    return graph.substr(0, 97) + '...'
  }
  return graph
})
