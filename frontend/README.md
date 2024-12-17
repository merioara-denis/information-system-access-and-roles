# Информационная система доступы и роли

## Разработка

- Восстановление зависимостей
  > npm ci
- Запуск приложения локально
  > npm start
- Запуск проверки кода
  > npm test
- Запуск сборки
  > npm run build

## Интеграция проверок при сборке

- detect circular dependencies
- detected unused code

## Интеграция проверок при использование eslint

- prettier
- spell checker (cspell)
- quality code
  - 'no-param-reassign': 'error',
  - 'max-statements-per-line': ['error', { max: 1 }],
  - 'no-multiple-empty-lines': ['error', { max: 2 }],
  - 'max-lines-per-function': ['error', { max: 32 }],
  - 'max-depth': ['error', 4],
  - 'max-params': ['error', 3],
  - 'max-lines': ['error', 90],
