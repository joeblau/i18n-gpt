import { translate } from "./translator.js";
import fs from "fs";

async function main() {
  const inputPath = process.argv[3];
  const codes = process.argv[5].split(",");

  if (!inputPath || !codes) {
    throw new Error("Please specify --file and --codes");
  }

  const filePathParts = inputPath.split("/");
  const fileName = filePathParts[filePathParts.length - 1];

  const fileContent = fs.readFileSync(inputPath, "utf8");

  const outputDir = "output";
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  for (const code of codes) {
    console.log(`Start processing language code: ${code}`);
    const translation = await translate(code, fileContent);
    const outputPath = `output/${fileName}_${code}.txt`;
    fs.writeFileSync(outputPath, translation);
    console.log(`Finished processing language code: ${code}`);
    console.log("Sleeping for 20 seconds...");
    await new Promise((resolve) => setTimeout(resolve, 20000));
  }
}

main();
