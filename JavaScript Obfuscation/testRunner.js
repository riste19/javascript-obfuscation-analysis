// const { execSync } = require("child_process");
// const fs = require("fs");
// const path = require("path");

// function runFile(fullPath) {
//   try {
//     const output = execSync(`node "${fullPath}"`, {
//       encoding: "utf8",
//       timeout: 5000
//     });
//     return output.includes("RESULT:") ? output.match(/RESULT:\s*(.+)/)[1] : null;
//   } catch (err) {
//     return null;
//   }
// }

// // Test all JS files inside a given folder
// function testFolder(folderPath) {
//   const files = fs.readdirSync(folderPath).filter(f => f.endsWith(".js"));

//   console.log(`\n=== Testing folder: ${path.basename(folderPath)} ===`);

//   files.forEach(file => {
//     const fullPath = path.join(folderPath, file);
//     const result = runFile(fullPath);
//     if (result !== null) {
//       console.log(`${file.padEnd(35)} PASS ✅  RESULT: ${result}`);
//     } else {
//       console.log(`${file.padEnd(35)} FAIL ❌`);
//     }
//   });
// }

// // Main runner
// function main() {
//   const baseDir = __dirname; // assuming testRunner.js is at the same level as file1/, file2/, ...
//   const folders = fs.readdirSync(baseDir).filter(f =>
//     fs.statSync(path.join(baseDir, f)).isDirectory()
//   );

//   console.log("FUNCTIONALITY TEST START\n");

//   folders.forEach(folder => {
//     const folderPath = path.join(baseDir, folder);
//     testFolder(folderPath);
//   });

//   console.log("\nFUNCTIONALITY TEST END");
// }

// main();








// const { execSync } = require("child_process");
// const fs = require("fs");
// const path = require("path");

// function runFile(fullPath) {
//   try {
//     const output = execSync(`node "${fullPath}"`, { encoding: "utf8", timeout: 5000 });
//     // Only show the RESULT line
//     const resultLine = output.split("\n").find(line => line.includes("RESULT:"));
//     return resultLine || "FAIL ❌";
//   } catch (err) {
//     return "ERROR ❌";
//   }
// }

// function testFolder(folderPath) {
//   const files = fs.readdirSync(folderPath).filter(f => f.endsWith(".js"));
//   console.log(`\n=== Testing folder: ${path.basename(folderPath)} ===`);
//   files.forEach(file => {
//     const fullPath = path.join(folderPath, file);
//     const result = runFile(fullPath);
//     console.log(`${file.padEnd(25)} ${result}`);
//   });
// }

// // --- TEST ONLY file1 ---
// const folder1Path = path.join(__dirname, "file1");
// testFolder(folder1Path);










// // testRunner.js
// const { execSync } = require("child_process");
// const fs = require("fs");
// const path = require("path");

// // --- CONFIG ---
// // folders for each file
// const folders = ["file1", "file2", "file3", "file4", "file5"];
// // optional: ignore folders not yet ready
// // const folders = ["file1"]; // for testing only

// function getFileSizeKB(filePath) {
//   const stats = fs.statSync(filePath);
//   return (stats.size / 1024).toFixed(2);
// }

// function runFile(fullPath) {
//   try {
//     const output = execSync(`node "${fullPath}"`, { encoding: "utf8", timeout: 5000 });
//     const resultLine = output.split("\n").find(line => line.includes("RESULT:"));
//     if (!resultLine) return { status: "FAIL ❌", result: "N/A" };
//     const resultValue = resultLine.split("RESULT:")[1].trim();
//     return { status: "PASS ✅", result: resultValue };
//   } catch (err) {
//     return { status: "ERROR ❌", result: "N/A" };
//   }
// }

// function testFolder(folderName) {
//   const folderPath = path.join(__dirname, folderName);
//   const files = fs.readdirSync(folderPath).filter(f => f.endsWith(".js"));

//   const originalFile = files.find(f => f === `file${folderName.slice(-1)}.js`);
//   const originalSize = getFileSizeKB(path.join(folderPath, originalFile));

//   console.log(`\n=== Comparison for ${folderName} ===`);
//   console.log("File".padEnd(25) + "Size(KB)".padEnd(10) + "%Change".padEnd(10) + "RESULT");

//   files.forEach(file => {
//     const fullPath = path.join(folderPath, file);
//     const size = getFileSizeKB(fullPath);
//     const { status, result } = runFile(fullPath);

//     // calculate size change relative to original
//     const percentChange = ((size - originalSize) / originalSize * 100).toFixed(0) + "%";

//     console.log(
//       file.padEnd(25) +
//       size.toString().padEnd(10) +
//       percentChange.padEnd(10) +
//       result + ` (${status})`
//     );
//   });
// }

// // --- RUN ALL FOLDERS ---
// folders.forEach(folder => {
//   if (fs.existsSync(path.join(__dirname, folder))) {
//     testFolder(folder);
//   } else {
//     console.log(`Folder ${folder} not found, skipping...`);
//   }
// });









// testRunner.js
// const { execSync } = require("child_process");
// const fs = require("fs");
// const path = require("path");
// const chalk = require("chalk"); // for colors in console

// // --- CONFIG ---
// const folders = ["file1", "file2", "file3", "file4", "file5"];

// // --- HELPERS ---
// function getFileSizeKB(filePath) {
//   const stats = fs.statSync(filePath);
//   return parseFloat((stats.size / 1024).toFixed(2));
// }

// function runFile(fullPath) {
//   try {
//     const output = execSync(`node "${fullPath}"`, { encoding: "utf8", timeout: 5000 });
//     const resultLine = output.split("\n").find(line => line.includes("RESULT:"));
//     if (!resultLine) return { status: "FAIL ❌", result: "N/A" };
//     const resultValue = resultLine.split("RESULT:")[1].trim();
//     return { status: "PASS ✅", result: resultValue };
//   } catch (err) {
//     // Don't print full error, just mark as ERROR
//     return { status: "ERROR ❌", result: "N/A" };
//   }
// }

// function testFolder(folderName) {
//   const folderPath = path.join(__dirname, folderName);
//   if (!fs.existsSync(folderPath)) {
//     console.log(`Folder ${folderName} not found, skipping...`);
//     return;
//   }

//   const files = fs.readdirSync(folderPath).filter(f => f.endsWith(".js"));

//   // Identify original file for size comparison
//   const originalFile = files.find(f => f === `file${folderName.slice(-1)}.js`);
//   const originalSize = originalFile ? getFileSizeKB(path.join(folderPath, originalFile)) : 0;

//   // Collect data for sorting
//   const data = files.map(file => {
//     const fullPath = path.join(folderPath, file);
//     const size = getFileSizeKB(fullPath);
//     const { status, result } = runFile(fullPath);
//     const percentChange = originalSize
//       ? ((size - originalSize) / originalSize * 100).toFixed(0) + "%"
//       : "N/A";
//     return { file, size, percentChange, result, status };
//   });

//   // Sort by size ascending
//   data.sort((a, b) => a.size - b.size);

//   // Print table header
//   console.log(`\n=== Comparison for ${folderName} ===`);
//   console.log(
//     "File".padEnd(25) +
//     "Size(KB)".padEnd(10) +
//     "%Change".padEnd(10) +
//     "RESULT"
//   );

//   // Print rows
//   data.forEach(row => {
//     const statusColored = row.status.includes("PASS") ? chalk.green(row.status) : chalk.red(row.status);
//     console.log(
//       row.file.padEnd(25) +
//       row.size.toString().padEnd(10) +
//       row.percentChange.padEnd(10) +
//       `${row.result} (${statusColored})`
//     );
//   });
// }

// // --- RUN ALL FOLDERS ---
// folders.forEach(testFolder);



// testRunner.js
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Optional: chalk for colored PASS/FAIL (install chalk@4 if using require)
let chalk;
try { chalk = require("chalk"); } catch(e){ chalk = null; }

// --- CONFIG ---
const folders = ["file1","file2","file3","file4","file5"];

// --- HELPERS ---
function getFileSizeKB(filePath){
    const stats = fs.statSync(filePath);
    return parseFloat((stats.size/1024).toFixed(2));
}

function runFile(fullPath) {
  try {
    const output = execSync(`node "${fullPath}"`, {
      encoding: "utf8",
      timeout: 5000,
      stdio: ['pipe', 'pipe', 'pipe'] // <--- redirect stderr so it doesn't print
    });
    const resultLine = output.split("\n").find(line => line.includes("RESULT:"));
    if (!resultLine) return { status: "FAIL ❌", result: "N/A" };
    return { status: "PASS ✅", result: resultLine.split("RESULT:")[1].trim() };
  } catch (err) {
    // Now stderr is not printed; just mark as error
    return { status: "ERROR ❌", result: "N/A" };
  }
}

function testFolder(folderName){
    const folderPath = path.join(__dirname, folderName);
    if(!fs.existsSync(folderPath)){ console.log(`Folder ${folderName} not found, skipping...`); return; }

    const files = fs.readdirSync(folderPath).filter(f=>f.endsWith(".js"));
    const originalFile = files.find(f => f === `file${folderName.slice(-1)}.js`);
    const originalSize = originalFile ? getFileSizeKB(path.join(folderPath,originalFile)) : 0;

    // Collect data
    const data = files.map(file=>{
        const fullPath = path.join(folderPath,file);
        const size = getFileSizeKB(fullPath);
        const {status,result} = runFile(fullPath);
        const percentChange = originalSize ? ((size-originalSize)/originalSize*100).toFixed(0)+"%" : "N/A";
        return {file,size,percentChange,result,status};
    });

    // Sort by size ascending
    data.sort((a,b)=>a.size-b.size);

    // Print table
    console.log(`\n=== Comparison for ${folderName} ===`);
    console.log("File".padEnd(25)+"Size(KB)".padEnd(10)+"%Change".padEnd(10)+"RESULT");

    data.forEach(row=>{
        const statusColored = chalk
            ? row.status.includes("PASS") ? chalk.green(row.status) : chalk.red(row.status)
            : row.status;
        console.log(
            row.file.padEnd(25)+
            row.size.toString().padEnd(10)+
            row.percentChange.padEnd(10)+
            `${row.result} (${statusColored})`
        );
    });
}

// --- RUN ALL FOLDERS ---
folders.forEach(testFolder);