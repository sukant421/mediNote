import 'dotenv/config';
import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { ConfigService } from '../config/config.service';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: new ConfigService().getDbUrl(),
  entities: [User],
  migrations: ['dist/migrations/*.js'],
  synchronize: false, // ❌ NEVER true in prod
});
