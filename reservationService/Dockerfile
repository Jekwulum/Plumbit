FROM python:3.11-slim

WORKDIR /home/plumbit/reservation

# Install the PostgreSQL development libraries
RUN apt-get update \
    && apt-get -y install libpq-dev gcc

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 4002

CMD ["python3", "-u", "src/server.py"]