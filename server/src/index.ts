/* eslint-disable node/no-process-env */
/* eslint-disable max-len */
import './configurations/config.ts';
import server from './server';

const PORT = process.env.PORT || "3000";
const msg = ('Express server started on port: ' + PORT);
// eslint-disable-next-line no-console
server.listen(3000, () => console.log(msg));
