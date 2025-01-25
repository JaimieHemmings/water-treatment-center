import * as migration_20250107_103134_initial from './20250107_103134_initial';
import * as migration_20250124_184137_status_enum_fix from './20250124_184137_status_enum_fix';

export const migrations = [
  {
    up: migration_20250107_103134_initial.up,
    down: migration_20250107_103134_initial.down,
    name: '20250107_103134_initial',
  },
  {
    up: migration_20250124_184137_status_enum_fix.up,
    down: migration_20250124_184137_status_enum_fix.down,
    name: '20250124_184137_status_enum_fix'
  },
];
