import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core'
import { Request, Response} from 'express';
import { User } from './entities/User';


interface UserRequest extends Request {
	session: {
		reload: Request['session']['reload'];
		resetMaxAge: Request['session']['resetMaxAge'];
		save: Request['session']['save'];
		touch: Request['session']['touch'];
		id: Request['session']['id'];
		cookie: Request['session']['cookie'];
		regenerate: Request['session']['regenerate'];
		destroy: Request['session']['destroy'];
		userId?: User['id'];
	};
};
export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  req: UserRequest;
  res: Response;
}