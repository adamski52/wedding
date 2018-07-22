# Host Branch

For use on host machine only.  Keeps minimal footprint for when source is not needed.

## Use:

### Clone repo on host machine
```
git clone git@github.com:adamski52/wedding.git
```

### Checkout `host` branch
```
git fetch -va
git checkout host
```

### Setup service
```
sudo cp /var/www/repos/jna-wedding/jna-wedding.service /etc/systemd/system
sudo systemctl enable jna-wedding
sudo systemctl start jna-wedding
```

### Setup .env
```
vi /var/www/repos/jna-wedding/.env
```

Required values are:
* POSTGRES_USER
* POSTGRES_PASSWORD
* POSTGRES_DB
* DB_HOST
* DB_PORT
* API_SECRET_KEY


### Setup cron job
```
cp /var/www/repos/jna-wedding/cron /etc/cron.daily/jna-wedding
chmod 755 /etc/cron.daily/jna-wedding
crontab -e
```

Desired frequency is probably:

```
0 4 * * * /etc/cron.daily/jna-wedding
```