# JavaScript Obfuscation Analysis

This project analyzes how different JavaScript obfuscation tools affect:

- File size
- Code functionality
- Execution results

The goal is to compare multiple obfuscation tools and AI-generated obfuscation techniques and evaluate their impact on JavaScript programs.

---

## Tools Tested

The following obfuscation tools and AI models were tested:

- ObfuscatorJS
- a2z.tools JavaScript Obfuscator
- FreeJSObfuscator
- ChatGPT
- Gemini

Each tool was used to obfuscate multiple JavaScript files and compare the results.

---

## What Was Measured

For every obfuscated file the following metrics were evaluated:

- Execution – whether the code still runs successfully
- Result consistency – whether the output matches the original file
- File size change – increase or decrease in file size after obfuscation

---

## Project Structure
```
file1/  file2/  file3/  file4/  file5/
testRunner.js
```

Each folder contains:

- original JavaScript file
- multiple obfuscated versions generated with different tools

Example:
```
file1/
  file1.js
  file1_a2z_obf.js
  file1_fjsobf.js
  file1_obfjs.js
  file1.chatgpt_obf.js
  file1.gemini_obf.js
```

---

## Automated Testing

A custom **Node.js test runner** automatically:

- executes every JavaScript file
- verifies functionality
- compares results with the original program
- measures file sizes
- calculates percentage change

This allows quick validation of whether obfuscation breaks the code.

---

## Example Output
```
=== Comparison for file1 ===
File                   Size(KB)   %Change   RESULT
file1.js               1.90       0%        PASS
file1.chatgpt_obf.js   1.50       -21%      PASS
file1.gemini_obf.js    1.33       -30%      PASS
file1_a2z_obf.js       5.70       +200%     PASS
file1_fjsobf.js        10.39      +447%     PASS
file1_obfjs.js         13.40      +605%     FAIL
```

**PASS** means the program still works correctly after obfuscation.

**FAIL** or **ERROR** means the obfuscation broke the functionality.

---

## Technologies Used

- JavaScript
- Node.js
- Command Line Interface (CLI)

---

## How to Run

Run the automated test runner:
```bash
node testRunner.js
```

This will execute all files and generate the comparison output.

---

## Purpose of the Project

This project demonstrates how different obfuscation techniques affect JavaScript programs in terms of:

- reliability
- code size
- execution behavior

It also demonstrates automated testing and result comparison using Node.js.

---

## License

This project is licensed under the MIT License.
