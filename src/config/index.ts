import { configSchema } from './config.schema';

export function validateEnv(): void {
  const { error } = configSchema.validate(process.env, {
    abortEarly: true,
    allowUnknown: true,
  });

  if (error) {
    throw new Error(`❌ Config validation error: ${error.details[0].message}`);
  }
}
