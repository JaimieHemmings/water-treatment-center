import * as migration_20250107_103134_initial from './20250107_103134_initial';

export const migrations = [
  {
    up: migration_20250107_103134_initial.up,
    down: migration_20250107_103134_initial.down,
    name: '20250107_103134_initial'
  },
];
