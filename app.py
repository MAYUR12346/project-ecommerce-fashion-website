from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']="sqlite:///project.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False
db = SQLAlchemy(app)

@app.route("/")
def index():
    return render_template("index.html")
    #return "<p>Hello, World!</p>"

@app.route("/")
def women():
    return render_template("women.html")

if __name__ == "__main__":
    app.run(debug=True)

    