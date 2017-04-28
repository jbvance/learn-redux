import Raven from 'raven-js';

const sentry_key = '041a9aa77a294b3394d8c81e50b399af';
const sentry_app = '162924';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
