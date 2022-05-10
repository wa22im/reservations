import App from '@/app';
import IndexRoute from '@/routes/indexRoute';

import validateEnv from '@utils/validateEnv';
import ReservationRoute from '@/routes/reservationsRoute';

validateEnv();

const app = new App([new IndexRoute(), new ReservationRoute()]);

app.listen();
