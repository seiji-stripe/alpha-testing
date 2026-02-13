import type { Percent } from "@stripe/scripts";

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

function main(): void {
  console.log(greet("TypeScript"));
}

main();
