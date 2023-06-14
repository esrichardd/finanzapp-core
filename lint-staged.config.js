module.exports = {
  '*.{ts,tsx,js}': [
    'prettier --write',
    'eslint --fix',
    () => 'tsc --pretty --noEmit',
  ],
  '*.{md,json}': ['prettier --write'],
};
