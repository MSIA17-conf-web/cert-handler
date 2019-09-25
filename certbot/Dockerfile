FROM certbot/certbot

RUN mkdir -p /webroots/msia17conferences.com/.well-known

VOLUME /webroots
VOLUME /etc/letsencrypt

# CMD ./certbot-auto certonly --dry-run --non-interactive --agree-tos --email cesi_homenco@hotmail.com -d homenco.space --webroot -w /webroots/homenco.space/