/**
 * Created by lichun on 2017/11/15.
 */
import Koa from 'koa';

import middleware from './middleware';
import auth from './auth';
import api from './api';

const app = new Koa();

app.keys = ['secret'];

app.use(middleware());
app.use(auth());
app.use(api());
app.use(ctx => ctx.status = 404);

export default app;