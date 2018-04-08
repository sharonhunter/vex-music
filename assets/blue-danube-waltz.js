// The Blue Danube Waltz
// Key of C Major

// TODO FIX STEM DIRECTIONS: https://github.com/0xfe/vexflow/wiki/Stem-Direction

var staveOne = {
  "x": 10,
  "y": 10,
  "staveWidth": 875,
  "spacerWidth": 810,
  "num_beats": 3,
  "beat_value": 4,
  "clef": "treble",
  "keySignature": "C",
  "timeSignature": [
    3,
    4
  ],
  "voices": [
    {
      "name": "Part 1",
      "measures": [
        {
          "notes": [
            {
              "keys": ["c/4"],
              "duration": "q",
              "stem_direction" : -1
            },
            {
              "keys": ["e/4"],
              "duration": "q",
              "stem_direction" : -1
            },
            {
              "keys": ["g/4"],
              "duration": "q",
              "stem_direction" : -1
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["g/4"],
              "duration": "q",
              "stem_direction" : -1
            },
            {
              "keys": ["b/4"],
              "duration": "qr"
            },
            {
              "keys": ["g/5"],
              "duration": "q",
              "stem_direction" : -1
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["g/5"],
              "duration": "q",
              "stem_direction" : -1
            },
            {
              "keys": ["b/4"],
              "duration": "qr"
            },
            {
              "keys": ["e/5"],
              "duration": "q",
              "stem_direction" : -1
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["e/5"],
              "duration": "q",
              "stem_direction" : -1
            },
            {
              "keys": ["b/4"],
              "duration": "qr"
            },
            {
              "keys": ["c/4"],
              "duration": "q",
              "stem_direction" : -1
            }
          ]
        }
      ]
    }
  ]
};

var staveTwo = {
  "x": 10,
  "y": 10,
  "staveWidth": 875,
  "spacerWidth": 845,
  "num_beats": 3,
  "beat_value": 4,
  "clef": "treble",
  "keySignature": "C",
  "voices": [
    {
      "name": "Part 1",
      "measures": [
        {
          "notes": [
            {
              "keys": ["c/4"],
              "duration": "q",
              "stem_direction" : -1
            },
            {
              "keys": ["e/4"],
              "duration": "q",
              "stem_direction" : -1
            },
            {
              "keys": ["g/4"],
              "duration": "q",
              "stem_direction" : -1
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["g/4"],
              "duration": "q",
              "stem_direction" : -1
            },
            {
              "keys": ["b/4"],
              "duration": "qr"
            },
            {
              "keys": ["g/5"],
              "duration": "q",
              "stem_direction" : -1
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["g/5"],
              "duration": "q",
              "stem_direction" : -1
            },
            {
              "keys": ["b/4"],
              "duration": "qr"
            },
            {
              "keys": ["f/5"],
              "duration": "q",
              "stem_direction" : -1
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["f/5"],
              "duration": "q",
              "stem_direction" : -1
            },
            {
              "keys": ["b/4"],
              "duration": "qr"
            },
            {
              "keys": ["b/3"],
              "duration": "q",
              "stem_direction" : -1
            }
          ]
        }
      ]
    }
  ]
};

var staveThree = {
  "x": 10,
  "y": 10,
  "staveWidth": 875,
  "spacerWidth": 845,
  "num_beats": 3,
  "beat_value": 4,
  "clef": "treble",
  "keySignature": "C",
  "voices": [
    {
      "name": "Part 1",
      "measures": [
        {
          "notes": [
            {
              "keys": ["b/3"],
              "duration": "q",
              "stem_direction" : -1
            },
            {
              "keys": ["d/4"],
              "duration": "q",
              "stem_direction" : -1
            },
            {
              "keys": ["a/4"],
              "duration": "q",
              "stem_direction" : -1
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["a/4"],
              "duration": "q",
              "stem_direction" : -1
            },
            {
              "keys": ["b/4"],
              "duration": "qr"
            },
            {
              "keys": ["a/5"],
              "duration": "q",
              "auto_stem": true
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["a/5"],
              "duration": "q",
              "auto_stem": true
            },
            {
              "keys": ["b/4"],
              "duration": "qr"
            },
            {
              "keys": ["f/5"],
              "duration": "q",
              "auto_stem": true
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["f/5"],
              "duration": "q",
              "auto_stem": true
            },
            {
              "keys": ["b/4"],
              "duration": "qr"
            },
            {
              "keys": ["b/3"],
              "duration": "q",
              "auto_stem": true
            }
          ]
        }
      ]
    }
  ]
};

var staveFour = {
  "x": 10,
  "y": 10,
  "staveWidth": 875,
  "spacerWidth": 845,
  "num_beats": 3,
  "beat_value": 4,
  "clef": "treble",
  "keySignature": "C",
  "voices": [
    {
      "name": "Part 1",
      "measures": [
        {
          "notes": [
            {
              "keys": ["b/3"],
              "duration": "q",
              "auto_stem": true
            },
            {
              "keys": ["b/4"],
              "duration": "qr"
            },
            {
              "keys": ["a/4"],
              "duration": "q",
              "auto_stem": true
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["a/4"],
              "duration": "q",
              "auto_stem": true
            },
            {
              "keys": ["b/4"],
              "duration": "qr"
            },
            {
              "keys": ["a/5"],
              "duration": "q",
              "auto_stem": true
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["a/5"],
              "duration": "q",
              "auto_stem": true
            },
            {
              "keys": ["b/4"],
              "duration": "qr"
            },
            {
              "keys": ["e/5"],
              "duration": "q",
              "auto_stem": true
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["e/5"],
              "duration": "q",
              "auto_stem": true
            },
            {
              "keys": ["b/4"],
              "duration": "qr"
            },
            {
              "keys": ["b/4"],
              "duration": "qr"
            }
          ]
        }
      ]
    }
  ]
};

var staveArray = [staveOne, staveTwo, staveThree, staveFour];



export { staveArray } ;
