module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@protos/(.*)$": "<rootDir>/dist/generated/typescript/$1",
  },
  roots: ["<rootDir>/tests"],
};