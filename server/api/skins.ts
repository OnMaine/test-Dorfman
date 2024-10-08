import { defineEventHandler } from 'h3'
import { promises as fs } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(async () => {
  const dataPath = resolve('server/data/skins.json')
  const data1 = await fs.readFile(dataPath, 'utf-8')

  const { data } = JSON.parse(data1)
  return data
})
