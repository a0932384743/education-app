import { IncomingMessage, ServerResponse } from 'http';
import {products} from '../../dummy';

export default function handler(_: IncomingMessage, res: ServerResponse) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(products));
}
