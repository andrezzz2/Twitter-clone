import './configurations/config.ts';
import server from './server';

const PORT = process.env.PORT || "3000";
const msg = ('Express server started on port: ' + PORT);

server.listen(3000, () => console.log(msg));
