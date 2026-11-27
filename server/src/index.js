import 'dotenv/config'          // load variables from .env into process.env
import path from 'node:path'    // built-in Node module for working with file paths

console.log('App name:', process.env.APP_NAME)
console.log('Port:', process.env.PORT)
console.log('Secret loaded:', process.env.SECRET_KEY ? 'yes' : 'no')
console.log('Node version:', process.version)
console.log('Working directory:', process.cwd())
console.log('Folder name:', path.basename(process.cwd()))