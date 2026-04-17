import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  const uploadDir = path.join(process.cwd(), "/uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  const form = formidable({
    uploadDir,
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: "Upload failed" });
      return;
    }

    res.status(200).json({ message: "File uploaded successfully" });
  });
}