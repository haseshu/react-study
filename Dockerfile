FROM python:3.8
USER root

RUN apt-get update
RUN apt-get -y install locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9
ENV TERM xterm

RUN apt-get install -y vim less
RUN apt-get install -y postgresql
RUN apt-get install -y libgl1-mesa-dev

RUN pip install --upgrade pip
RUN pip install --upgrade setuptools
RUN pip install Flask
RUN pip install Flask-SQLAlchemy
RUN pip install Flask-Script
RUN pip install coverage

RUN pip install numpy
RUN pip install matplotlib
RUN pip install pandas
RUN pip install tqdm
RUN pip3 install opencv-contrib-python
RUN pip3 install opencv-python
RUN pip install tensorflow==2.2.0
RUN pip3 install line-bot-sdk
RUN pip3 install xmltodict
RUN pip3 install urllib3
#COPY ./flask ./flask
WORKDIR flask

ENV FLASK_APP=flask_blog
ENV FLASK_ENV=development
RUN echo $FLASK_APP
#RUN pwd


#RUN touch test2.txt

#node.js reactを入れて行く
WORKDIR /root/flask/flask_blog/templates/ikemen-checker
RUN apt-get install -y nodejs npm
RUN npm i -g create-react-app
RUN npm install --save redux
RUN npm install --save react-redux
RUN npm install @material-ui/core
RUN npm install --save react-addons-css-transition-group
RUN npm install --save react-router-dom
RUN npm install --save react-router-redux
RUN npm install --save history@4.7.2
RUN npm install --save connected-react-router
RUN npm install --save react-router
RUN npm install --save redux-logger
RUN npm install --save redux-thunk
RUN npm install react-pose --save
RUN npm install --save prop-types
RUN npm install --save fetch-jsonp
RUN npm install --save qs
#RUN create-react-app ikemen-checker
#RUN npm start


WORKDIR /root/flask
#RUN python manage.py init_db
#CMD flask run -h 0.0.0.0 -p 5000
#CMD flask run -h 0.0.0.0 -p $PORT
