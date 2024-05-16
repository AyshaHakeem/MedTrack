from server.models import CareCircle, UserMap

def get_carecircles(filter_criteria):
    care_circle_ids = UserMap.query.filter_by(filter_criteria).values('carecircle_id')
    if care_circle_ids:
        care_circles = CareCircle.query.filter(CareCircle.id.in_(care_circle_ids)).all()
        return care_circles
    return 