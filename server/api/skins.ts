import { readFileSync } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(() => {
  const filePath = resolve('./assets/skins.json')
  const fileContents = readFileSync(filePath, 'utf-8')
  const { data } = JSON.parse(fileContents)
  return data
})
