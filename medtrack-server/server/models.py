# from run import db
from server import db
from flask import json
from sqlalchemy import Integer, String, Column, DateTime
from sqlalchemy.orm import Mapped, mapped_column
import datetime

class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] 
    name: Mapped[str] = mapped_column(String(60))
    password: Mapped[str]= mapped_column(String(1280))

    def __repr__(self):
        return f'{self.id}'
    
class CareCircle(db.Model):
    __tablename__ = 'carecircle'
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(60))
    patients = db.relationship('Patient', backref='carecircle', lazy=True)

    def __repr__(self):
        return f'{self.id}'

class Patient(db.Model):
    __tablename__ = 'patient'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    username = Column(String, unique=True)
    carecircle_id = Column(Integer, db.ForeignKey('carecircle.id'), nullable=False)

    medicines = db.relationship('Medicine', backref='patient', lazy=True)


    def __repr__(self):
        return f'{self.id}'

class Medicine(db.Model):
    __tablename__ = 'medicine'

    id = Column(Integer, primary_key=True, unique=True)
    patient_id = Column(Integer, db.ForeignKey('patient.id'), nullable=False)
    carecircle_id = Column(Integer)
    name = Column(String(100), nullable=False)
    from_date = Column(DateTime)
    to_date = Column(DateTime, nullable=False)
    note = Column(String(200))

    doses = db.relationship('MedicineDose', back_populates='medicine', cascade='all, delete-orphan')

    def __repr__(self):
        return f'{self.id}'

class MedicineDose(db.Model):
    id = Column(Integer, primary_key=True)
    medicine_id = Column(Integer, db.ForeignKey('medicine.id'), nullable=False)
    time = Column(DateTime, nullable=False)
    dose = Column(String(50), nullable=False)

    medicine = db.relationship('Medicine', back_populates='doses')

    def __repr__(self):
        return f'{self.id}'

class MedicineLog(db.Model):
    id = Column(Integer, primary_key=True)
    medicine_id = Column(String(120))
    date = Column(DateTime)
    status = Column(String(120))
    caregiver_id = Column(Integer)

    def __repr__(self):
        return f'{self.id}'

class UserMap(db.Model):
    id = Column(db.Integer, primary_key=True)
    user_id = Column(db.Integer, db.ForeignKey('user.id'))
    carecircle_id = Column(db.Integer, db.ForeignKey('carecircle.id'))

    def __repr__(self):
        return f'{self.id}'

# class PatientMap(db.Model):
#     id: Mapped[int] = mapped_column(primary_key=True)
#     care_circle_id: Mapped[int]
#     patient_id: Mapped[int]