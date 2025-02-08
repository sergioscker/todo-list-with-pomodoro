export const clearMocks = true;
export const coverageProvider = 'v8';
export const testEnvironment = 'jsdom';
export const moduleNameMapper = {
  '^@/(.*)$': '<rootDir>/src/$1',
  // Ignorar arquivos CSS e outros assets não-JS
  '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
};

export const transform = {
  '^.+\\.(js|jsx)$': [
    '@swc/jest',
    {
      jsc: {
        parser: {
          syntax: 'ecmascript',
          jsx: true,
        },
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
      },
    },
  ],
};

export const setupFilesAfterEnv = [
  // Adiciona @testing-library/jest-dom para permitir usar as asserções de 'toBeInTheDocument', entre outras.
  '<rootDir>/src/tests/setup.js',
  '@testing-library/jest-dom',
];

// Permitir transformação de pacotes ESM dentro de node_modules
export const transformIgnorePatterns = [
  '/node_modules/(?!lucide-react|@tanstack/react-query)',
];
