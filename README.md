JavaScript Obfuscation Analysis

This project analyzes how different JavaScript obfuscation tools affect:

- File size
- Code functionality
- Execution results

Tools tested:
- ObfuscatorJS
- a2z.tools
- FreeJSObfuscator
- ChatGPT
- Gemini

Each original file was obfuscated and tested using a custom Node.js test runner that verifies:

- Execution
- Result consistency
- File size change

Example output:

File                  Size(KB)  %Change  Result
file1.js              1.90      0%       PASS
file1_a2z_obf.js      5.70      +200%    PASS
file1_fjsobf.js       10.39     +447%    PASS
