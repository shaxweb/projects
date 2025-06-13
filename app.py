from flask import Flask, render_template, jsonify, request
import time

app = Flask(__name__)
render = render_template


@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        pass
    else:
        current_time = time.strftime("%H:%M:%S", time.localtime())
        return render("app.py", time=current_time)

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)