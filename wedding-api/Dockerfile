FROM python:3.6

WORKDIR /app
ADD . /app
RUN apt-get update
RUN apt-get install -y
RUN pip3 install -r requirements.txt
RUN python3 manage.py collectstatic

EXPOSE 9090

CMD ["uwsgi", "--ini", "wsgi.ini", "--static-map", "/static=/app/static"]