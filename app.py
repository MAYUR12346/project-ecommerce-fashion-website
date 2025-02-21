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

@app.route('/women')
def women():
    return render_template('women.html')

@app.route('/men')
def men():
    return render_template('men.html')

@app.route('/kids')
def kids():
    return render_template('kids.html')

@app.route('/Accessories')
def Accessories():
    return render_template('Accessories.html')

@app.route('/Shoes')
def Shoes():
    return render_template('Shoes.html')

@app.route('/wishlist')
def wishlist():
    return render_template('wishlist.html')

@app.route('/cart')
def cart():
    return render_template('cart.html')

@app.route('/Account')
def Account():
    return render_template('Account.html')

if __name__ == "__main__":
    app.run(debug=True)

    