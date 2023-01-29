import 'reflect-metadata';
import orm from '../ormconfig';
import { server } from './app';

orm.initialize()
    .then(() => {
        server.listen(3333, () => {
            console.log('Server is running...');
        })
    })
    .catch((err) => {
        console.log(err.message);
    })

