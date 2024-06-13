FROM python:3.11-slim

WORKDIR /app

# Install the PostgreSQL development libraries
RUN apt-get update \
    && apt-get -y install libpq-dev gcc \
    && pip install psycopg2

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ENV PORT=4002

EXPOSE 4002

CMD ["python", "src/server.py"]