module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@protos/(.*)$": "<rootDir>/../../generated/typescript/src/$1",
  },
  roots: ["<rootDir>/tests"],
};