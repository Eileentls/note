import { Router } from 'express';

import { normalize } from './libs/utils';
import asyncWrap from './libs/async-wrap';

import Blogs from './models/blogs';

const router = Router();

router.get('/blogs', asyncWrap(async (req, res) => {
  let result = await Blogs.findAll();
  result = normalize()(result); 
  res.status(200).json(result);
}));

export default router;
