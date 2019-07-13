from flask import Flask, render_template
app = Flask('myApp')

@app.route('/')
def index():
   return render_template('main.html')

if __name__ == '__main__':
   app.run(debug=False)
