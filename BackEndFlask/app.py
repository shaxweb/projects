from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route("/")
def home():
	return "<h1>This is the test Page</h1>"

# Пример GET-запроса
@app.route("/hello", methods=['GET'])
def hello():
    return jsonify({"message": "Hello, world!"})

# Пример POST-запроса
@app.route('/echo', methods=['POST'])
def echo():
    data = request.json  # Получаем JSON из тела запроса
    return jsonify({"you_sent": data})

# Запуск приложения
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)