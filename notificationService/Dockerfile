FROM python:3.11-slim

WORKDIR /home/plumbit/notification

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 4004

CMD ["python3", "-u", "src/server.py"]