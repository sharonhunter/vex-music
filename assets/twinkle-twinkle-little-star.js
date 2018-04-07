// Twinkle Twinkle Little Star
// Key of C Major


var staveOne = {
  "x": 10,
  "y": 10,
  "staveWidth": 875,
  "spacerWidth": 810,
  "num_beats": 4,
  "beat_value": 4,
  "clef": "treble",
  "keySignature": "C",
  "timeSignature": [
    4,
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
              "duration": "q"
            },
            {
              "keys": ["c/4"],
              "duration": "q"
            },
            {
              "keys": ["g/4"],
              "duration": "q"
            },
            {
              "keys": ["g/4"],
              "duration": "q"
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["a/4"],
              "duration": "q"
            },
            {
              "keys": ["a/4"],
              "duration": "q"
            },
            {
              "keys": ["g/4"],
              "duration": "h"
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["f/4"],
              "duration": "q"
            },
            {
              "keys": ["f/4"],
              "duration": "q"
            },
            {
              "keys": ["e/4"],
              "duration": "q"
            },
            {
              "keys": ["e/4"],
              "duration": "q"
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["d/4"],
              "duration": "q"
            },
            {
              "keys": ["d/4"],
              "duration": "q"
            },
            {
              "keys": ["c/4"],
              "duration": "h"
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
  "num_beats": 4,
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
              "keys": ["g/4"],
              "duration": "q"
            },
            {
              "keys": ["g/4"],
              "duration": "q"
            },
            {
              "keys": ["f/4"],
              "duration": "q"
            },
            {
              "keys": ["f/4"],
              "duration": "q"
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["e/4"],
              "duration": "q"
            },
            {
              "keys": ["e/4"],
              "duration": "q"
            },
            {
              "keys": ["d/4"],
              "duration": "h"
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["g/4"],
              "duration": "q"
            },
            {
              "keys": ["g/4"],
              "duration": "q"
            },
            {
              "keys": ["f/4"],
              "duration": "q"
            },
            {
              "keys": ["f/4"],
              "duration": "q"
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["e/4"],
              "duration": "q"
            },
            {
              "keys": ["e/4"],
              "duration": "q"
            },
            {
              "keys": ["d/4"],
              "duration": "h"
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
  "num_beats": 4,
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
              "duration": "q"
            },
            {
              "keys": ["c/4"],
              "duration": "q"
            },
            {
              "keys": ["g/4"],
              "duration": "q"
            },
            {
              "keys": ["g/4"],
              "duration": "q"
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["a/4"],
              "duration": "q"
            },
            {
              "keys": ["a/4"],
              "duration": "q"
            },
            {
              "keys": ["g/4"],
              "duration": "h"
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["f/4"],
              "duration": "q"
            },
            {
              "keys": ["f/4"],
              "duration": "q"
            },
            {
              "keys": ["e/4"],
              "duration": "q"
            },
            {
              "keys": ["e/4"],
              "duration": "q"
            }
          ]
        },
        {
          "notes": [
            {
              "keys": ["d/4"],
              "duration": "q"
            },
            {
              "keys": ["d/4"],
              "duration": "q"
            },
            {
              "keys": ["c/4"],
              "duration": "h"
            }
          ]
        }
      ]
    }
  ]
};

var staveArray = [staveOne, staveTwo, staveThree];



export { staveArray } ;
