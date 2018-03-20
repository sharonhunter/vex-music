var staveOne = {
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

function renderStaveToDiv(songObject, div) {
  VF = Vex.Flow;

  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  renderer.resize(900, 125);
  var context = renderer.getContext();

  // TODO: separate width, etc
  var stave = new VF.Stave(10, 10, 875);
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

  // this works, but runs a lot of times
  // seems to only work when called on the array, 
  // does not work on the single note though seems like it would
  // also need to be able to pass in colors rather than hard-coding here
  function colorNotes(arr){
    // if (!noteToColor || !color){
    //   return;
    // };
    for (var i = arr.length - 1; i >= 0; i--) {
      if(arr[i].keys == 'f/4'){
        arr[i].setKeyStyle(0, { fillStyle: 'lime' });
      }
    }
  }

  function renderNote(note){
    notes.push(new VF.StaveNote(note));
  }

  songObject.voices.forEach(renderVoice);

  stave.setContext(context).draw();

  colorNotes(notes);

  // time signature would only be on the first stave, so...think about this
  var voice = new VF.Voice({num_beats: songObject.timeSignature[0], 
                            beat_value: songObject.timeSignature[1]});
  voice.setStrict(false);
  voice.addTickables(notes);

  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 810);
  voice.draw(context, stave);
}

var staveArray = [staveOne, staveTwo];

function drawSongToPage(containerId, divId){
  var div = createSongDiv(containerId, divId);
  for (var i = 0; i < staveArray.length; i++) {
    renderStaveToDiv(staveArray[i], div);
  }
}

drawSongToPage('json-song-container', 'json-song');
