import { connect, StringCodec } from 'nats';

const url = process.env.NATS_URL || 'nats://nats:4222';

const connectToNats = async () => {
  const nc = await connect({ servers: url });
  const sc = StringCodec();

  const subscription = nc.subscribe('hello');

  (async () => {
    const numberOfProcessed = subscription.getProcessed();
    console.log('subscription closed');
  })();
};
