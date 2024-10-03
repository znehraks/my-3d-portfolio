export const getBrowserDeviceInfo = () => {
  const userAgent = navigator.userAgent;
  const browser = (() => {
    if (userAgent.indexOf('Firefox') > -1) {
      return 'Mozilla Firefox';
    } else if (userAgent.indexOf('SamsungBrowser') > -1) {
      return 'Samsung Internet';
    } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
      return 'Opera';
    } else if (userAgent.indexOf('Trident') > -1) {
      return 'Microsoft Internet Explorer';
    } else if (userAgent.indexOf('Edge') > -1) {
      return 'Microsoft Edge';
    } else if (userAgent.indexOf('Chrome') > -1) {
      return 'Google Chrome';
    } else if (userAgent.indexOf('Safari') > -1) {
      return 'Safari';
    } else {
      return 'Unknown';
    }
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
