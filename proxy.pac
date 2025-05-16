function FindProxyForURL(url, host) {
 
  if (shExpMatch(host, "*.emofid.com") ||
      shExpMatch(host, "*.faraz.io") ||
      shExpMatch(host, "*.chatgpt.com") ||
      shExpMatch(host, "*.aparat.com") ||
      shExpMatch(host, "*.digikala.com") ||
      shExpMatch(host, "*.p30download.com") ||
      shExpMatch(host, "*.soft98.ir") ||
      shExpMatch(host, "*.speedtest.net") ||
      host == "emofid.com" ||
      host == "faraz.io" ||
      host == "chatgpt.com" ||
      host == "aparat.com" ||
      host == "digikala.com" ||
      host == "p30download.com" ||
      host == "speedtest.net") {
    return "DIRECT";
  }

  
  return "PROXY 127.0.0.1:8080";
}
