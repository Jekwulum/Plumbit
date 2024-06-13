FROM python:3.11-alpine

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ENV PORT=4004

EXPOSE 4004

CMD ["python", "src/server.py"]