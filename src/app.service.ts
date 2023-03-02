import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';
import * as randomNumber from 'random-number';
import { writeFile } from 'fs/promises';

@Injectable()
export class AppService {
  async getHello(body): Promise<void> {
    const publisher = createClient({
      socket: {
        host: '127.0.0.1',
      },
    });

    const subscriber = createClient({
      socket: {
        host: '127.0.0.1',
      },
    });

    publisher.on('error', (err) => console.log('Redis Client Error', err));
    subscriber.on('error', (err) => console.log('Redis Client Error', err));

    await subscriber.connect();
    await subscriber.subscribe('transmitter', async (message) => {
      console.log(JSON.parse(message)); // 'message'
      if (JSON.parse(message).code === 0) {
        await writeFile(`_${body.task}_.json`, message);
      }
      subscriber.quit();
    });

    body.id = randomNumber({
      min: 10000000,
      max: 99999999,
      integer: true,
    });

    await publisher.connect();
    await publisher.publish('adapter-muik', JSON.stringify(body));
    await publisher.disconnect();
  }
}
