# Host Branch

For use on host machine only.  Keeps minimal footprint for when source is not needed.

## Use:

### Ensure Docker is installed on host
```
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce
```

### Ensure Compose is installed on host
```
sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```


### Clone repo on host
```
cd /var/www/repos
git clone git@github.com:adamski52/wedding.git
```

### Checkout `host` branch
```
cd /var/www/repos/wedding
git checkout host
```

### Setup .env
```
vi /var/www/repos/wedding/.env
```

Required values are:
* POSTGRES_USER
* POSTGRES_PASSWORD
* POSTGRES_DB
* DB_HOST
* DB_PORT
* API_SECRET_KEY

### Setup service
```
sudo cp /var/www/repos/wedding/jna-wedding.service /etc/systemd/system
sudo systemctl enable jna-wedding
sudo systemctl start jna-wedding
```


### Setup cron job
```
sudo cp /var/www/repos/wedding/cron /etc/cron.daily/jna-wedding
sudo chmod 755 /etc/cron.daily/jna-wedding
crontab -e
```

Desired frequency is probably:

```
0 4 * * * /etc/cron.daily/jna-wedding
```