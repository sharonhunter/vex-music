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

function applyToNotes(staveObject, noteFn){
  staveObject.voices.forEach(function(voice){
    voice.measures.forEach(function(measure){
      measure.notes.forEach(noteFn);
    })
  })
}

function colorByPitch(staveObject, pitchToColor, color){
  applyToNotes(staveObject, function(note){
    note.keys == pitchToColor ? note.color = color : note.color = 'black';
  })
}

function colorByDuration(staveObject, durationToColor, color){
  applyToNotes(staveObject, function(note){
    if(note.duration == durationToColor){
      note.color = color;
    }
  })
}

function renderStaveToDiv(staveObject, div) {
  VF = Vex.Flow;

  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  renderer.resize(900, 125);
  var context = renderer.getContext();

  var stave = new VF.Stave(staveObject.x, staveObject.y, staveObject.staveWidth);
  if (staveObject.clef) {
    stave.addClef(staveObject.clef);
  }
  if (staveObject.timeSignature) {
    stave.addTimeSignature(staveObject.timeSignature.join("/"));
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
    var staveNote = new VF.StaveNote({ keys: note.keys, duration: note.duration });
    if (note.hasOwnProperty('color')){
      staveNote.setKeyStyle(0, { fillStyle: note.color });
    }
    notes.push(staveNote);
  }

  staveObject.voices.forEach(renderVoice);

  stave.setContext(context).draw();

  var voice = new VF.Voice({num_beats: staveObject.num_beats, 
                            beat_value: staveObject.beat_value});
  voice.setStrict(false);
  voice.addTickables(notes);

  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], staveObject.spacerWidth);
  voice.draw(context, stave);
}

var staveArray = [staveOne, staveTwo, staveThree];

function drawSongToPage(options){
  var div = createSongDiv(options.containerId, options.divId);
  staveArray.forEach(function(staveObject){
    colorByPitch(staveObject, options.pitchToColor, options.pitchColor);
    // colorByDuration(staveObject, options.durationToColor, options.durationColor);
    renderStaveToDiv(staveObject, div);
  })
}