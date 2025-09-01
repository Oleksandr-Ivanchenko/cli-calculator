function runCommand() {
  const input = document.getElementById('commandInput').value.trim();
  const [command, ...args] = input.split(' ');
  const operands = args.map(Number);

  if (operands.some(isNaN)) {
    return show('❌ Invalid operands');
  }

  let result;
  switch (command) {
    case 'add':
      result = operands.reduce((a, b) => a + b, 0); break;
    case 'subtract':
      result = operands.reduce((a, b) => a - b); break;
    case 'multiply':
      result = operands.reduce((a, b) => a * b, 1); break;
    case 'divide':
      if (operands.slice(1).includes(0)) return show('❌ Division by zero');
      result = operands.reduce((a, b) => a / b); break;
    default:
      return show('❌ Unsupported operation');
  }

  show(`✅ Result: ${result}`);
}

function show(text) {
  document.getElementById('output').textContent = text;
}
