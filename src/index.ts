import 'dotenv/config'
import Logger from './util/log'

class Example {
  constructor() {
    Logger.info('Example was booted!')
  }
}
new Example()
