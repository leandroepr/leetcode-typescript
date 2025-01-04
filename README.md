# LeetCode TypeScript Solutions Repository

This repository contains TypeScript solutions for programming challenges from [LeetCode](https://leetcode.com/), a popular platform for practicing coding problems and improving algorithmic skills. The goal of this project is to document and share solutions for various challenges while ensuring code quality through automated testing.

## Project Structure

```
/leetcode-typescript
├── /src
│   ├── /0001-two-sum
│   │   ├── description.md              # Problem description
│   │   ├── solution-1.ts               # Solution 1 implementation (function)
│   │   ├── solution-2.ts               # Solution 2 implementation (function)
│   │   └── two-sum.spec.ts             # Single test file applying an array of solutions
│   ├── /0002-add-two-numbers            # Example for a second challenge
│   └── /...                            # More challenges will be added here
├── /tests
│   └── setup.ts                        # Global test configuration (if needed)
├── jest.config.ts                      # Jest configuration
├── package.json                        # Dependencies and scripts
├── tsconfig.json                       # TypeScript configuration
├── README.md                           # General project documentation
└── .gitignore                          # Ignore unnecessary files
```

## Cloning and Running Tests

To clone the repository and install the dependencies:

```bash
git clone https://github.com/leandroepr/leetcode-typescript.git
cd leetcode-typescript
npm install
```

### Run all tests

```bash
npm test
```

### Run tests for a specific problem

```bash
npx jest src/0001-two-sum/two-sum.spec.ts
```

## Challenges

The table below provides navigation to the solutions for each registered challenge:

| #    | Title                                      | Difficulty | Tags                  |
| ---- | ------------------------------------------ | ---------- | --------------------- |
| 0001 | [Two Sum](src/0001-two-sum/description.md) | Easy       | `Array`, `Hash Table` |

Each problem will have a `description.md` file containing the original problem description. Tests for each problem will validate an array of solutions (functions) within a single `.spec.ts` file to cover the main test cases described in the problem, typically three primary scenarios.
