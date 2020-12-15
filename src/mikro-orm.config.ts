import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { __prod__ } from './constants';
import { User } from './entities/User';

export default {
	migrations: {
		path: path.join(__dirname, './migrations'),
		pattern: /^[\w-]+\d+\.[tj]s$/,
	},
	entities: [Post, User],
	dbName: 'redditClone',
	user: 'postgres',
	password: 'postgres',
	type: 'postgresql',
	debug: !__prod__,
	port: 5433,
} as Parameters<typeof MikroORM.init>[0];
