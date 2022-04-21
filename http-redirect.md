# non-https to https
RewriteCond %{HTTPS} !=on
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# www to non-www
RewriteCond %{HTTP_HOST} www.example.net
RewriteRule (.*) https://example.net/$1 [R=301,L]