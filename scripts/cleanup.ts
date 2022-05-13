import fs from 'fs'
import path from 'path'
import mergeFiles from 'merge-files'

const files = [
  'main.d.ts',
  'dev.d.ts',
  'App.vue.d.ts',
  'components',
  'sizes.d.ts'
]

const rename = {

}

const merge = {
  "index.d.ts": [
    "components/VueButton.vue.d.ts",
    "sizes.d.ts"
  ]
}

const typesPath = file => path.resolve(__dirname, `../types/${file}`)
const errHandler = err => {
  if (err)
    throw err
}

async function mvFile ( oldPath: string, newPath: string ) {
  await fs.mkdir(path.dirname(newPath), { recursive: true }, errHandler)
  return fs.rename(oldPath, newPath, errHandler)
}

async function createFile ( _path: string ) {
  await fs.mkdir(path.dirname(_path), { recursive: true }, errHandler)
  return fs.writeFile(_path, '', errHandler)
}

async function unlink ( path: string ) {
  if (fs.lstatSync(path).isDirectory())
    await fs.rmdir(path, { recursive: true }, errHandler)
  else
    await fs.unlink(path, errHandler)
}

async function renameCleanUp () {
  for (const from of Object.keys(rename)) {
    const to = rename[from]
    await mvFile(typesPath(from), typesPath(to))
  }
}

async function mergeCleanUp () {
  for (const outputFile of Object.keys(merge)) {
    const inputFiles = merge[outputFile]
    const outputPath = typesPath(outputFile)

    if (! fs.existsSync(outputPath))
      await createFile(outputPath)

    await mergeFiles(inputFiles.map(typesPath), outputPath)
  }
}

async function unlinkCleanUp () {
  for (const file of files) {
    await unlink(typesPath(file))
  }
}

(async () => {
  await renameCleanUp()
  await mergeCleanUp()
  await unlinkCleanUp()
})()