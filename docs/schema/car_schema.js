vDataJSON["car"] = {
  "type": "object",
  "title": "Car",
  "properties": {
    "make": {
      "type": "string",
      "enum": [
        "Toyota",
        "BMW",
        "Honda",
        "Ford",
        "Chevy",
        "VW"
      ]
    },
    "model": {
      "type": "string"
    },
    "year": {
      "type": "integer",
      "enum": [
        1995,1996,1997,1998,1999,
        2000,2001,2002,2003,2004,
        2005,2006,2007,2008,2009,
        2010,2011,2012,2013,2014,
        2015,2016,2017
      ],
      "default": 2008
    },
    "comment" : {
      "type":"string",
      "default": "comment about the car"
    }
  }
}
