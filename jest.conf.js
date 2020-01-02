// jest.config.js
module.exports = {
    verbose: true,
    "collectCoverageFrom": [
        "src/javascript/**/*.{js}",
        "!**/node_modules/**",

    ],
    "coverageDirectory": "coverage",
    "coverageReporters": ["text-summary"] // "lcov"
};
