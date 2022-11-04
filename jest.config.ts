import type { Config } from "jest";

const config: Config = {
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.ts$': 'ts-jest'
    },
    moduleFileExtensions: ['js', 'ts']
}

export default config;