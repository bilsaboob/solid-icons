import fs from "fs"
import chalk from "chalk"

import {
  SRC_PATH,
  INCLUDE_LIB_PATH,
  log
} from "./constants"
import { includeLibFileTypes } from "./file-templates"
import { PackAttachedIcons } from "./types"

export async function prepareIncludeLibDist() {
  if (!fs.existsSync(INCLUDE_LIB_PATH)) fs.mkdirSync(INCLUDE_LIB_PATH)

  fs.copyFileSync(`${SRC_PATH}/lib/index.tsx`, `${INCLUDE_LIB_PATH}/index.tsx`)
}

function writeEachPack(pack: PackAttachedIcons) {
  const packFolder = `${INCLUDE_LIB_PATH}/${pack.shortName}`

  fs.mkdirSync(packFolder)

  // icon.tsx per file for explicit imports
  for (let index = 0; index < includeLibFileTypes.length; index++) {
    const type = includeLibFileTypes[index]

    pack.icons.forEach((icon) => {
      const fileName = `${packFolder}/${type.fileName(icon)}`
      fs.appendFileSync(fileName, type.header)
      fs.appendFileSync(fileName, type.template(icon))
    })
  }

  log(
    chalk.white(`📦 ${pack.packName}`) +
    chalk.dim(" LIB package has been generated") +
    chalk.green(" ✓")
  )
}

export async function writeIncludeLibFiles(iconsPayload: PackAttachedIcons[]) {
  for (let index = 0; index < iconsPayload.length; index++) {
    writeEachPack(iconsPayload[index])
  }
}
