FROM ubuntu:latest

RUN apt update

RUN apt install wget cron -y

RUN mkdir -p /webroots/msia17conferences.com/.well-known /scripts

WORKDIR /scripts

RUN wget https://dl.eff.org/certbot-auto

RUN chmod a+x ./certbot-auto

ADD crontask /etc/cron.d/renew_cert

RUN chmod 0644 /etc/cron.d/renew_cert

RUN service cron start


# CMD /scripts/certbot-auto certonly --dry-run --non-interactive --agree-tos --email willem.houm@gmail.com -d www.msia17conferences.com -d msia17conferences.com --webroot -w /webroots/msia17conferences.com/

# FROM certbot/certbot

# RUN mkdir -p /webroots/msia17conferences.com/.well-known

# VOLUME /webroots
# VOLUME /etc/letsencrypt

# CMD certbot certonly --dry-run --non-interactive --agree-tos --email willem.houm@gmail.com -d www.msia17conferences.com -d msia17conferences.com --webroot -w /webroots/msia17conferences.com/
# # ./certbot-auto certonly --dry-run --non-interactive --agree-tos --email willem.houm@gmail.com -d www.msia17conferences.com -d msia17conferences.com --webroot -w /webroots/msia17conferences.com/