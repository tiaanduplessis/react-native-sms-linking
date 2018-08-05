import { Platform, Linking } from 'react-native'

function assert (condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

async function launchURL (url) {
  const supported = await Linking.canOpenURL(url)

  if (!supported) {
    return Promise.reject(new Error('Provided URL can not be handled'))
  }

  return Linking.openURL(url)
}

function sms (phone = '', body = '') {
  assert(typeof phone === 'string', 'Phone number should be a string')
  assert(typeof body === 'string', 'Body should be a string')

  const sep = Platform.OS === 'ios' ? '&' : '?'
  const url = `sms:${phone}${
    body ? sep + 'body=' + encodeURIComponent(body) : ''
  }`

  return launchURL(url)
}

export default sms
