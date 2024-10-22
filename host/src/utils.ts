export function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = 'Unknown';
  let browserVersion = 'Unknown';

  // Detect browser name
  if (userAgent.indexOf('Firefox') > -1) {
    browserName = 'Firefox';
  } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
    browserName = 'Opera';
  } else if (
    userAgent.indexOf('Chrome') > -1 &&
    userAgent.indexOf('Edg') === -1
  ) {
    browserName = 'Chrome';
  } else if (
    userAgent.indexOf('Safari') > -1 &&
    userAgent.indexOf('Chrome') === -1
  ) {
    browserName = 'Safari';
  } else if (userAgent.indexOf('Edg') > -1) {
    browserName = 'Edge';
  } else if (
    userAgent.indexOf('MSIE') > -1 ||
    !!(document as any).documentMode
  ) {
    browserName = 'Internet Explorer';
  }

  // Detect browser version
  const versionMatch =
    userAgent.match(
      /(firefox|opr|chrome|safari|edg|msie|trident(?=\/))\/?\s*(\d+)/i,
    ) || [];
  if (versionMatch.length > 2) {
    browserVersion = versionMatch[2];
  }

  return { browserName, browserVersion };
}

// Example usage
const browserInfo = getBrowserInfo();

console.log(
  `Browser: ${browserInfo.browserName}, Version: ${browserInfo.browserVersion}`,
);

export const getLocale = () => {
  return 'en-GB'; // dynamic look up for locale
};
