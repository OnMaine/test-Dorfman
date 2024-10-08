import { defineEventHandler } from 'h3'
import { promises as fs } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(async () => {
  const dataPath = resolve('server/data/payments.json')
  const data = await fs.readFile(dataPath, 'utf-8')
  return JSON.parse(data)
})
