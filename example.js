import sms from 'react-native-sms-linking'

sms().catch(console.error)

// or with number
sms('0845017543').catch(console.error)

// and body
sms('0845017543', 'Hi friend').catch(console.error)