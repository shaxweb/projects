from flask import Flask, render_template, jsonify, request
import time

app = Flask(__name__)
render = render_template


@app.route("/")
def home():
    current_time = time.strftime("%H:%M:%S", time.localtime())
	return render("app.py", time=current_time)

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
    app.run(host="0.0.0.0", debug=True)