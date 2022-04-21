# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript<br>
AddOutputFilterByType DEFLATE application/rss+xml<br>
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject<br>
AddOutputFilterByType DEFLATE application/x-font<br>
AddOutputFilterByType DEFLATE application/x-font-opentype<br>
AddOutputFilterByType DEFLATE application/x-font-otf<br>
AddOutputFilterByType DEFLATE application/x-font-truetype<br>
AddOutputFilterByType DEFLATE application/x-font-ttf<br>
AddOutputFilterByType DEFLATE application/x-javascript<br>
AddOutputFilterByType DEFLATE application/xhtml+xml<br>
AddOutputFilterByType DEFLATE application/xml<br>
AddOutputFilterByType DEFLATE font/opentype<br>
AddOutputFilterByType DEFLATE font/otf<br>
AddOutputFilterByType DEFLATE font/ttf<br>
AddOutputFilterByType DEFLATE image/svg+xml<br>
AddOutputFilterByType DEFLATE image/x-icon<br>
AddOutputFilterByType DEFLATE text/css<br>
AddOutputFilterByType DEFLATE text/html<br>
AddOutputFilterByType DEFLATE text/javascript<br>
AddOutputFilterByType DEFLATE text/plain<br>
AddOutputFilterByType DEFLATE text/xml<br>
    
# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html<br>
BrowserMatch ^Mozilla/4\.0[678] no-gzip<br>
BrowserMatch \bMSIE !no-gzip !gzip-only-text/html<br>
Header append Vary User-Agent<br>