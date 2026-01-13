module.exports = {
  // Середовище для Node.js
  testEnvironment: 'node',
  
  // Патерн для пошуку тестових файлів
  testMatch: [
    '**/tests/**/*.test.js'
  ],
  
  // Timeout для тестів (10 секунд)
  testTimeout: 10000,
  
  // Детальний вивід
  verbose: true,

  // Файл для початкової настройки перед виконанням тестів
  setupFiles: ["./tests/setup.js"],
};