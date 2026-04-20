export const getBrowserDeviceInfo = () => {
  if (typeof navigator === 'undefined') {
    return {
      browser: 'Unknown',
      device: 'Desktop' as const,
      userAgent: '',
    };
  }

  const { userAgent } = navigator;
  const browser = (() => {
    if (userAgent.indexOf('Firefox') > -1) {
      return 'Mozilla Firefox';
    }
    if (userAgent.indexOf('SamsungBrowser') > -1) {
      return 'Samsung Internet';
    }
    if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
      return 'Opera';
    }
    if (userAgent.indexOf('Trident') > -1) {
      return 'Microsoft Internet Explorer';
    }
    if (userAgent.indexOf('Edge') > -1) {
      return 'Microsoft Edge';
    }
    if (userAgent.indexOf('Chrome') > -1) {
      return 'Google Chrome';
    }
    if (userAgent.indexOf('Safari') > -1) {
      return 'Safari';
    }

    return 'Unknown';
  })();

  const device: 'Desktop' | 'Mobile' = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    ? 'Mobile'
    : 'Desktop';

  return {
    browser,
    device,
    userAgent,
  };
};
