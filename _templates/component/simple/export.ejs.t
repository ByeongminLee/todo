---
inject: true
to: src/components/<%= category%>/index.ts
after: "export * from './<%= name %>';"
---
export * from './<%= name %>';