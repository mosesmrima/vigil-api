#!/isr/bin/python3
import json
incidents = []


def parser(incident):
    time, event = incident.split(".", 1)
    month, year = time.strip().split(" ")

    desc = ""
    try:
        desc, country = event.strip().split("#")
    except ValueError:
        country = ""
        desc = event.strip()
    incident_dict = {
        "month": month,
        "year": int(year),
        "description": desc,
        "country": country
    }
    incidents.append(incident_dict)


with open("./incidents.txt", "r") as f:
    incident = ""
    for line in f:
        if not line.isspace():
            incident += line.replace("\n", " ")
        else:
            parser(incident)
            incident = ""


with open("./incidents.json", "w") as f:
    json.dump(incidents, f)
