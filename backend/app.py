from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Backend Running Successfully"

@app.route('/upgrade', methods=['POST'])
def upgrade():
    return jsonify({
        "upgradedUrl": "https://picsum.photos/400"
    })

app.run(debug=True)