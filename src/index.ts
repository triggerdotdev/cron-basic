import { Trigger, scheduleEvent } from "@trigger.dev/sdk";

new Trigger({
  // Give your Trigger a stable ID
  id: "cron-basic",
  name: "Trigger event at 9am every weekday",
  //Trigger this event at 09:00 on every day-of-week from Monday through Friday. (https://crontab.guru/#0_9_*_*_1-5)
  on: scheduleEvent({ cron: "0 9 * * 1-5" }),
  run: async (event, ctx) => {
    // This can be anything - e.g. update your database, send an email or post a daily Slack update etc
    // Create a log at the correct time
    await ctx.logger.info("Received the cron scheduled event", {
      event,
    });
  },
}).listen();
