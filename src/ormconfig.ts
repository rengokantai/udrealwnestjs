import { DataSourceOptions } from "typeorm"


const config: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'simple',
    password: 'pass',
    database: 'udrealwnestjs',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
}

export default config;