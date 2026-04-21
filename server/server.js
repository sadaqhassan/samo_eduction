import express from 'express'

import { configApp } from './Configs/Config.js';
import { userModel } from './Models/user.model.js';

const app = express();

configApp(app);



