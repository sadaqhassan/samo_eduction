import express from 'express'

import { configApp } from './Configs/Config.js';

const app = express();

configApp(app);
