import multer from "multer"
import path from "path"
import fs from "fs"

// Ensure upload directory exists (multer does not create it)
const uploadDir = path.join(process.cwd(), "public", "temp")
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    const ext = path.extname(file.originalname) || ""
    const base = path.basename(file.originalname, ext) || "file"
    cb(null, `${base}-${uniqueSuffix}${ext}`)
  },
})

export const upload = multer({
  storage,
})
