import { mobizon } from './config/setup';

(async () => {
  /** Enviar SMS */
  const sendSms = await mobizon.sendSms({
    recipient: process.env.NUMBER,
    from: '',
    text: 'SMS sent by Mobizon.',
  });

  console.log(sendSms);

  /** Enviar SMS agendado */
  const sendSmsScheduled = await mobizon.sendSms({
    recipient: process.env.NUMBER,
    from: '',
    text: 'SMS sent by Mobizon (scheduled).',
    params: {
      name: 'SMS Scheduled',
      deferredToTs: '2022-01-26 01:00:00',
    },
  });

  console.log(sendSmsScheduled);
})();
