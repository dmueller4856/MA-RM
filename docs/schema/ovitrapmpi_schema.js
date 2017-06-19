vDataJSON["ovitrapmpi_schema"] = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "additionalProperties": true,
    "title": "OviTrap/MPI Record",
    "definitions": {},
    "type": "object",
    "id": "/ovitraprec",
    "headerTemplate": "{{self.date}} {{self.collectionType}}",
    "defaultProperties": [
        "id",
        "collectionType",
        "username",
        "trapNumber",
        "mpi",
        "eggCount",
        "comments",
        "problem",
        "problemIndoorOutdoor",
        "problemIndoorOutdoorSituation",
        "date",
        "time",
        "cityName",
        "geoLocation"
    ],
    "properties": {
        "id": {
            "type": "number",
            "id": "/items/properties/id",
            "title": "ID",
            "default": 20170518090055960,
            "description": "Unique 'id' for the record"
        },
        "collectionType": {
            "type": "string",
            "id": "/items/properties/collectionType",
            "title": "OviTrap/Local",
            "default": "OviTrap",
            "enum": [
              "OviTrap",
              "Local"
            ],
            "description": "Select Local for a local accessment of the Mosquito Problem and OviTrap for an assessment of egg count."
        },
        "username": {
            "type": "string",
            "id": "/items/properties/username",
            "title": "Username",
            "default": "adithya",
            "format": "text",
            "description": "An explanation for 'root.*.username' about the purpose of string instance with editor path 'root.*.username'."
        },
        "trapNumber": {
            "type": "integer",
            "id": "/items/properties/trapNumber",
            "title": "Trap Number",
            "default": 0,
            "description": "All OviTraps have a unique trap number, add number here if applicable."
        },
        "mpi": {
            "type": "string",
            "id": "/items/properties/mpi",
            "title": "MPI",
            "default": "1-2",
            "enum" : [
              "N/A",
              "0",
              "1-2",
              "3-5",
              "5-10",
              ">10"
            ],
            "description": "Mosquito Perception Index - MPI"
        },
        "eggCount": {
            "type": "integer",
            "id": "/items/properties/eggCount",
            "title": "Egg Count OviTrap",
            "default": 45,
            "description": "the number of eggs detected on the OviTrap"
        },
        "comments": {
            "type": "string",
            "id": "/items/properties/comments",
            "title": "Title of 'root.*.comments' Type: 'string'",
            "default": "",
            "format": "text",
            "description": "An explanation and additional comments of users."
        },
        "problem": {
            "type": "string",
            "id": "/items/properties/problem",
            "title": "Problem Comment",
            "default": "",
            "format": "text",
            "description": "Additional comments according to mosquito problem found at geolocation."
        },
        "problemIndoorOutdoor": {
            "type": "string",
            "id": "/items/properties/problemIndoorOutdoor",
            "title": "Outdoor/Indoor Problem",
            "default": "Out",
            "description": "select option if the mosquito problem is Indoor or Outdoor"
        },
        "problemIndoorOutdoorSituation": {
            "type": "string",
            "id": "/items/properties/problemIndoorOutdoorSituation",
            "title": "Indoor/Outdoor Situation",
            "default": "",
            "format": "text",
            "description": "An explanation for problem situation (indoor or outdoor)"
        },
        "date": {
            "type": "string",
            "id": "/items/properties/date",
            "title": "Date",
            "default": "2017-05-18",
            "format": "text",
            "description": "Date when the data is collected"
        },
        "time": {
            "type": "string",
            "id": "/items/properties/time",
            "title": "Time",
            "default": "09:00",
            "format": "text",
            "description": "Time when the data is collected"
        },
        "cityName": {
            "type": "string",
            "id": "/items/properties/cityName",
            "title": "City",
            "default": "",
            "format": "text",
            "description": "Name of the City where the data was collected"
        },
        "geoLocation": {
            "type": "string",
            "id": "/items/properties/geoLocation",
            "title": "GeoLocation",
            "default": "",
            "format": "text",
            "description": "Geolocation where the data was collected"
        }
    }
}
