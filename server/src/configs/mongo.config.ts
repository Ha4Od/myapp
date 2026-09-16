import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
    configService: ConfigService,
): Promise<MongooseModuleOptions> => {
    return {
        uri: getMongoString(configService),
        authSource: configService.get<string>('MONGO_AUTH_DB'),
    };
};

const getMongoString = (configService: ConfigService): string => {
    const login = configService.get<string>('MONGO_LOGIN');
    const password = encodeURIComponent(
        configService.get<string>('MONGO_PASSWORD', ''),
    );
    const host = configService.get<string>('MONGO_HOST');
    const port = configService.get<string>('MONGO_PORT');
    const db = configService.get<string>('MONGO_DB');

    return `mongodb://${login}:${password}@${host}:${port}/${db}`;
};