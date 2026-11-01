# superagent-playground

A tiny sandbox repository used to exercise an autonomous coding agent
(`dsh-superagent`). It exists so the agent has something small, safe and
verifiable to work on: a couple of utility functions with a test suite.

## Structure

```
src/math.js        # small math helpers
test/math.test.js  # node:test suite (Node >= 22, no dependencies)
```

## Commands

```bash
npm test           # runs node --test
npm run demo       # quick manual smoke run
```

## Ground rules for the agent

- Keep changes small and focused; run `npm test` before opening a PR.
- Never touch files outside this repository.
- Open a pull request against `main`; do not merge it.
- If a request is ambiguous, ask one concrete question.

## Backlog

- [ ] Add `divide(a, b)` that returns `null` on division by zero (with a test).
- [ ] Add `average(list)` that returns `null` for an empty list (with a test).
- [ ] Make `formatPercent` round to one decimal place.
