import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

//components
import Connection from './database/db.js';
import bannerRoute from './routes/bannerRoute.js';
import laravelRoute from './routes/laravelRoute.js';
import AccountBillingRoutes from './routes/AccountBillingRoutes.js';
import hrmRoute from './routes/hrmRoute.js';
import hrm2Route from './routes/hrm2Route.js';
import builtTechRoutes from './routes/builtTechRoutes.js';
import collabRoute from './routes/collabRoute.js';
import fashionBoxRoute from './routes/fashionBoxRoute.js';

import fileUpload from 'express-fileupload';

const app = express();


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', bannerRoute);
app.use('/', laravelRoute);
app.use('/', AccountBillingRoutes);
app.use('/', hrmRoute);
app.use('/', hrm2Route);
app.use('/', collabRoute);
app.use('/', fashionBoxRoute);
app.use('/', builtTechRoutes);


app.use(fileUpload({
    useTempFiles:true
}))
const PORT = 3000;


Connection();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));