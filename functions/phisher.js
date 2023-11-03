function isPhishingLink(url) {
    const anchor = document.createElement('a');
    anchor.href = url;
  
    // Check if the URL uses the 'http' or 'https' protocol
    if (anchor.protocol !== 'http:' && anchor.protocol !== 'https:') {
      return true;
    }
  
    // Check for suspicious domain names or subdomains
    const suspiciousDomains = [
      'phishing',
      'login',
      'account',
      'secure',
      'verify',
      // Add more suspicious keywords here
    ];
  
    for (const keyword of suspiciousDomains) {
      if (anchor.hostname.includes(keyword)) {
        return true;
      }
    }
  
    // Check for the use of IP addresses in the URL
    if (/^(?:\d{1,3}\.){3}\d{1,3}$/.test(anchor.hostname)) {
      return true;
    }
  
    return false;
  }
  
  // Example usage:
//   const url = 'https://example.com/phishing-site'; // Replace with the URL you want to check

//   if (isPhishingLink(url)) {
//     console.log('This might be a phishing link.');
//   } else {
//     console.log('This does not appear to be a phishing link.');
//   }
  

module.export = isPhishingLink;