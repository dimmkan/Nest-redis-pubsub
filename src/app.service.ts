import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';
import * as randomNumber from 'random-number';

@Injectable()
export class AppService {
  async getHello(body): Promise<void> {
    const publisher = createClient({
      socket: {
        host: '192.168.221.142',
      },
    });

    const subscriber = createClient({
      socket: {
        host: '192.168.221.142',
      },
    });

    publisher.on('error', (err) => console.log('Redis Client Error', err));
    subscriber.on('error', (err) => console.log('Redis Client Error', err));

    await subscriber.connect();
    await subscriber.subscribe('transmitter', (message) => {
      console.log(JSON.parse(message)); // 'message'
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
