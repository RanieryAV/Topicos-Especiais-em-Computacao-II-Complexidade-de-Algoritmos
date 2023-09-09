import fileSys from "fs";
import * as path from 'path';

export default function reportGenerator(infos, fileName) {

  const filePath = path.join("Esquenta 2 Algoritmo encontrar maior valor","data", "reports", `${fileName}.txt`);

  fileSys.writeFile(filePath, infos, (err) => {
    if (err) {
      console.error("Erro to write on file:", err);
      return;
    }
    console.log("Successfully generated report!");
  });
}
