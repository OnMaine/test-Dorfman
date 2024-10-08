import { readFileSync } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(() => {
  const filePath = resolve('assets/payments.json')
  const fileContents = readFileSync(filePath, 'utf-8')
  return JSON.parse(fileContents)
})
