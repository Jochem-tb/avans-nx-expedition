// libs/util-env/src/lib/environment.ts
import { IEnvironment } from './environment.interface';
import { environment as dev } from './environment.development';
import { environment as prod } from './environment.production';

const isProduction = process.env['NODE_ENV'] === 'production';

export const environment: IEnvironment = isProduction ? prod : dev;
