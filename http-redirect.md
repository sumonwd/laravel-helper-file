# non-https to https
RewriteCond %{HTTPS} !=on<br>
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]<br>

# www to non-www
RewriteCond %{HTTP_HOST} www.example.net<br>
RewriteRule (.*) https://example.net/$1 [R=301,L]<br>