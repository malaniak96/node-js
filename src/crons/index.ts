import { notificationForOldVisitors } from "./notification-for-old-visitors.cron";
import { tokensRemover } from "./remove-old-tokens.cron";

export const runAllCronJobs = () => {
  tokensRemover.start();
  notificationForOldVisitors.start();
};
