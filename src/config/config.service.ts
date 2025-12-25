export class ConfigService {
  getPort(): number {
    return Number(process.env.PORT) || 8000;
    }
    
    getDbUrl(): any {
      return process.env.DB_URL;
    }
}
