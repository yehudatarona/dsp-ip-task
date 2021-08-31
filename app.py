from flask import Flask, request, jsonify,json
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import backref
from flask_cors import CORS


#Init App
app = Flask(__name__)
CORS(app)
#Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#Init db
db = SQLAlchemy(app)



class Mission(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    duration = db.Column(db.Integer)
    channel = db.relationship('Channel', backref='mission', lazy=True)
    def __init__(self, name, duration):
        self.name = name
        self.duration = duration
    # def __dict__(self):
    #     pass

        


class Channel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ip = db.Column(db.String(20), nullable=False)
    port = db.Column(db.Integer, nullable=False)
    type = db.Column(db.String(50))
    mis_id = db.Column(db.Integer, db.ForeignKey('mission.id'))

    def __init__(self, ip, port, type,mis_id):
        self.ip = ip
        self.port = port
        self.type = type
        self.mis_id = mis_id

# get all mission
@app.route('/missions')
def get_all_missions():
    missions = Mission.query.all()
    channels = Channel.query.all()
    output = []
    chs = []
    for mission in missions:
        mission_data = {'id':mission.id,'name': mission.name, 'duration': mission.duration}
        chs=[]
        for ch in channels:
            if ch.mis_id == mission.id:
                ch_data = {'id':ch.id,'ip': ch.ip, 'port':ch.port, 'type': ch.type, 'mis_id':ch.mis_id}
                chs.append(ch_data)    
        mission_data['channels'] = chs
        print(f'mission_data: {mission_data}') 
        output.append(mission_data)
    return {"missions": output}


@app.route('/missions/<id>', methods=['GET'])
def get_mission_by_id(id):
    
    mission = Mission.query.get_or_404(id)
    channels = Channel.query.all()
    chs = []
    for ch in channels:
        if ch.mis_id == mission.id:
            ch_data = {'id':ch.id,'ip': ch.ip,'port':ch.port, 'type': ch.type, 'mis_id':ch.mis_id}
            chs.append(ch_data)
   
    
    return {'id':mission.id,'name': mission.name, 'duration': mission.duration, 'channels':chs}


#create a mission
@app.route('/mission', methods=['POST'])
def add_mission():
    name = request.json['name']
    duration = request.json['duration']

    new_mission = Mission(name, duration)
    db.session.add(new_mission)
    db.session.commit()

    return {'id':new_mission.id,'name': new_mission.name, 'duration': new_mission.duration}

@app.route('/channel', methods=['POST'] )
def add_channel():
    ip = request.json['ip']
    port = request.json['port']
    type = request.json['type']
    mis_id = request.json['mis_id']

    new_channel = Channel(ip, port, type, mis_id)
    db.session.add(new_channel)
    db.session.commit()

    return {'id':new_channel.id,'ip': new_channel.ip, 'port': new_channel.port, 'type':new_channel.type, 'mis_id':new_channel.mis_id}


        
#Run Server
if __name__ == '__main__':
    app.run()