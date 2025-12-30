#!/usr/bin/env node

import fs from 'fs-extra'
import inquirer from 'inquirer'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function main() {
  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Nombre del nuevo proyecto:',
      default: 'omega-app'
    } 
  ])

  const targetDir = path.resolve(process.cwd(), projectName)
  const templateDir = path.resolve(__dirname, '../templates/basic')

  console.log(`📂 Creando proyecto en: ${targetDir}`)

  try {
    await fs.copy(templateDir, targetDir)
    console.log('✅ Proyecto creado correctamente.')
    console.log(`\n📦 cd ${projectName}`)
    console.log('📦 npm install')
    console.log('🚀 npm run dev')
  } catch (err) {
    console.error('❌ Error:', err.message)
  }
}

main()
