import './configurations/config.ts';
import server from './server';
import './database';

const PORT = process.env.PORT || "3000";

server.listen(3000, () => console.log('Express server started on port: ' + PORT));
