import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs"
import { dirname, join, relative } from "node:path"

const root = process.cwd()
const source = join(root, "legacy", "pages")
const assets = join(root, "legacy", "assets")
const publicDir = join(root, "public")

function copyTree(from, to) {
  if (!existsSync(from)) return 0
  let count = 0
  const walk = (dir) => {
    for (const entry of readdirSync(dir)) {
      const src = join(dir, entry)
      const dest = join(to, relative(from, src))
      if (statSync(src).isDirectory()) {
        mkdirSync(dest, { recursive: true })
        walk(src)
      } else {
        mkdirSync(dirname(dest), { recursive: true })
        cpSync(src, dest)
        count += 1
      }
    }
  }
  walk(from)
  return count
}

const pages = copyTree(source, publicDir)
const files = copyTree(assets, join(publicDir, "assets"))
console.log(`Restored ${pages} legacy pages and ${files} assets`)
