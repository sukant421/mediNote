export class ConfigService {
  getPort(): number {
    return Number(process.env.PORT) || 8000;
  }
}
