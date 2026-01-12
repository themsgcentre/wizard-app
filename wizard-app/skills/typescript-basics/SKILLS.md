---
name: typescript-basics
description: Generate typescript code
---

# When to use this skill
Use this skill when generating TypeScript Code in the project.

## Naming rules
- any observable/subject variables have to end with a $, e.g. players$
- use camel case for every type of variables

## methods
- always add the return type explicitly

## async operations
- use rxjs
- only use subjects if necessary or the usage brings clear advantages, otherwise stick to observables
- if subjects are used, use at least BehaviourSubject or ReplaySubject