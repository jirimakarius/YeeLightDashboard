FROM ubuntu:latest

# Update OS
RUN sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list
RUN apt-get update
RUN apt-get -y upgrade

# Install Python
RUN apt-get install -y python3.5 python-dev python-distribute python-pip
# Create app directory
ADD . /webapp

# Set the default directory for our environment
ENV HOME /webapp
WORKDIR /webapp

RUN pip install .

# Expose port 8000 for uwsgi
EXPOSE 5000

ENV FLASK_APP yeelight_dashboard
ENV FLASK_CONFIG ./config.py

ENTRYPOINT ["python", "-m", "flask", "run", "--host=0.0.0.0"]