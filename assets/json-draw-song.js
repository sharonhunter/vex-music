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

function createSongDiv(containerId, divId){
  var songContainerDiv = document.getElementById(containerId);
  var oldSongDiv = document.getElementById(divId);
  if (oldSongDiv) {
    oldSongDiv.parentNode.removeChild(oldSongDiv);
  }
  var newSongDiv = document.createElement('div');
  newSongDiv.setAttribute('id', divId);
  songContainerDiv.appendChild(newSongDiv);
  var div = document.getElementById(divId);
  return div;
}

function renderStaveToDiv(songObject, div, pitchToColor, color) {
  VF = Vex.Flow;

  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  renderer.resize(900, 125);
  var context = renderer.getContext();

  var stave = new VF.Stave(songObject.x, songObject.y, songObject.staveWidth);
  if (songObject.clef) {
    stave.addClef(songObject.clef);
  }
  if (songObject.timeSignature) {
    stave.addTimeSignature(songObject.timeSignature.join("/"));
  }

  var notes = [];

  function renderVoice(voice) {
    voice.measures.forEach(renderMeasure);
  }
  
  function renderMeasure(measure, index, arr) {
    measure.notes.forEach(renderNote);
    if (index < arr.length - 1){
      notes.push(new Vex.Flow.BarNote());
    }
  }

  function renderNote(note){
    notes.push(new VF.StaveNote(note));
  }

  // this works, but runs a lot of times
  // seems to only work when called on the array, 
  // does not work on the single note though seems like it would
  function colorNotes(arr, pitchToColor, color){
    if (!pitchToColor || !color){
      return;
    };
    for (var i = arr.length - 1; i >= 0; i--) {
      if(arr[i].keys == pitchToColor){
        arr[i].setKeyStyle(0, { fillStyle: color });
      }
    }
  }

  songObject.voices.forEach(renderVoice);

  stave.setContext(context).draw();

  var voice = new VF.Voice({num_beats: songObject.num_beats, 
                            beat_value: songObject.beat_value});
  voice.setStrict(false);
  voice.addTickables(notes);

  colorNotes(notes, pitchToColor, color);

  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], songObject.spacerWidth);
  voice.draw(context, stave);
}

var staveArray = [staveOne, staveTwo, staveThree];

function drawSongToPage(containerId, divId, pitchToColor, color){
  var div = createSongDiv(containerId, divId);
  for (var i = 0; i < staveArray.length; i++) {
    renderStaveToDiv(staveArray[i], div, pitchToColor, color);
  }
}

drawSongToPage('json-song-container', 'json-song', 'c/4', 'orange');
