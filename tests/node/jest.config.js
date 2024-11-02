module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@protos/(.*)$": "<rootDir>/../../generated/typescript/$1",
  },
  roots: ["<rootDir>/tests"],
};