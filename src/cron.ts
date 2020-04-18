import cron from 'node-cron'
import { serverClient } from './api'

const time = process.env.SCHEDULE_CRON || '1 17 * * *'

export const updateRanking = () => {
  cron.schedule(time, async () => {
    console.log('---------------------')
    console.log('Running Cron Job')
    const { data, status } = await serverClient.post(
      '/rank',
      {},
      {
        headers: { token: 'VARIT' },
      },
    )
    console.log(`${data.message} with status ${status}`)
  })
}
