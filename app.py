from flask import Flask, render_template, send_from_directory
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///product.db'

db = SQLAlchemy(app)

class User(db.Model):
    sno = db.Column(db.Integer , primary_key = True)
    username = db.Column(db.String(200), nullable = False)

with app.app_context():
    db.create_all()

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

@app.route('/Base')
def Base():
    return render_template('Base.html')





if __name__ == "__main__":
    app.run(debug=True)


   