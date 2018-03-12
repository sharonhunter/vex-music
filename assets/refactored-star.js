var song = {
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
              "keys": [
                "c/4"
              ],
              "duration": "q"
            },
            {
              "keys": [
                "c/4"
              ],
              "duration": "q"
            },
            {
              "keys": [
                "g/4"
              ],
              "duration": "q"
            },
            {
              "keys": [
                "g/4"
              ],
              "duration": "q"
            }
          ]
        },
        {
          "notes": [
            {
              "keys": [
                "c/4"
              ],
              "duration": "q"
            },
            {
              "keys": [
                "c/4"
              ],
              "duration": "q"
            },
            {
              "keys": [
                "g/4"
              ],
              "duration": "q"
            },
            {
              "keys": [
                "g/4"
              ],
              "duration": "q"
            }
          ]
        }
      ]
    }
  ]
};

function renderJsonSongToDiv(songObject, div) {
  VF = Vex.Flow;

  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  renderer.resize(700, 125);
  var context = renderer.getContext();

  // TODO: separate width, etc
  var stave = new VF.Stave(10, 10, 675);
  stave.addClef(songObject.clef);
  stave.addTimeSignature(songObject.timeSignature.join("/"));
  
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

  songObject.voices.forEach(renderVoice);

  stave.setContext(context).draw();
  // TODO fill in values from object
  var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
  voice.setStrict(false);
  voice.addTickables(notes);

  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 630);
  voice.draw(context, stave);
}

var div = document.getElementById("json-song");

renderJsonSongToDiv(song, div);






//////////////////////////////////////////////////////////////
function drawSong(pitchToColor,color){
  VF = Vex.Flow;

  // get the container div
  var songContainerDiv = document.getElementById("song-container");
  // remove the existing div#song if present
  var oldSongDiv = document.querySelector('#song');
  if (oldSongDiv) {
    oldSongDiv.parentNode.removeChild(oldSongDiv);
  }
  // create a new div#song to draw in
  var newSongDiv = document.createElement('div');
  newSongDiv.setAttribute("id", "song");
  songContainerDiv.appendChild(newSongDiv);
  // get the div
  var div = document.getElementById("song");

  // some general functions - move these out of this function??
  function createInitialStave(x, y, width, clef, timeSignature, context){
    var stave = new VF.Stave(x, y, width);
    stave.addClef(clef).addTimeSignature(timeSignature);
    return stave;
  }

  function createStave(x, y, width, clef){
    var stave = new VF.Stave(x, y, width);
    stave.addClef(clef);
    return stave;
  }

  // this one only works before the stave is drawn
  // because the note[keys] attributes disappear after rendering
  function colorNotesBefore(array, noteToColor, color){
    if (!noteToColor || !color){
      return;
    };
    for (var i = array.length - 1; i >= 0; i--) {
      if(array[i].keys == noteToColor){
        array[i].setKeyStyle(0, { fillStyle: color });
      }
    }
  }

  // this one can be called after drawing completed
  // but the note keys have expired by that point and aren't accessible
  // so this one probably not worth keeping...
  // function colorNotesAfter(color){
  //   var noteheads = document.querySelectorAll('.vf-notehead > path');
  //   for (var i = noteheads.length - 1; i >= 0; i--) {
  //     // console.log(noteheads[i].getAttribute('fill')); // black even when CSS is green
  //     noteheads[i].setAttribute('fill', color);
  //   }
  // }

  //////////////
  // first stave
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  renderer.resize(700, 125);
  var context = renderer.getContext();

  var initialStave = createInitialStave(10, 10, 675, "treble", "4/4");
  initialStave.setContext(context).draw();

  var notes = [
    new VF.StaveNote({keys: ["c/4"], duration: "q" }),
    new VF.StaveNote({keys: ["c/4"], duration: "q" }),
    new VF.StaveNote({keys: ["g/4"], duration: "q" }),
    new VF.StaveNote({keys: ["g/4"], duration: "q" }),
    new Vex.Flow.BarNote(),

    new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["g/4"], duration: "h" }),
    new Vex.Flow.BarNote(),

    new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["e/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["e/4"], duration: "q" }),
    new Vex.Flow.BarNote(),

    new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "h" })
  ];

  colorNotesBefore(notes, pitchToColor, color);

  var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
  voice.setStrict(false);
  voice.addTickables(notes);

  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 600);
  voice.draw(context, initialStave);

  ///////////////
  // second stave
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  renderer.resize(700, 125);
  var context = renderer.getContext();

  var secondStave = createStave(10, 10, 675, "treble");
  secondStave.setContext(context).draw();

  var notes = [
    new VF.StaveNote({keys: ["g/4"], duration: "q" }),
    new VF.StaveNote({keys: ["g/4"], duration: "q" }),
    new VF.StaveNote({keys: ["f/4"], duration: "q" }),
    new VF.StaveNote({keys: ["f/4"], duration: "q" }),
    new Vex.Flow.BarNote(),

    new Vex.Flow.StaveNote({ keys: ["e/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["e/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "h" }),
    new Vex.Flow.BarNote(),

    new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["e/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["e/4"], duration: "q" }),
    new Vex.Flow.BarNote(),

    new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "h" })
  ];

  colorNotesBefore(notes, pitchToColor, color);

  var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
  voice.setStrict(false);
  voice.addTickables(notes);

  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 630);
  voice.draw(context, secondStave);

  //////////////
  // third stave
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  renderer.resize(700, 125);
  var context = renderer.getContext();

  var thirdStave = createStave(10, 10, 675, "treble");
  thirdStave.setContext(context).draw();

  var notes = [
    new VF.StaveNote({keys: ["c/4"], duration: "q" }),
    new VF.StaveNote({keys: ["c/4"], duration: "q" }),
    new VF.StaveNote({keys: ["g/4"], duration: "q" }),
    new VF.StaveNote({keys: ["g/4"], duration: "q" }),
    new Vex.Flow.BarNote(),

    new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["g/4"], duration: "h" }),
    new Vex.Flow.BarNote(),

    new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["e/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["e/4"], duration: "q" }),
    new Vex.Flow.BarNote(),

    new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "h" })
  ];

  colorNotesBefore(notes, pitchToColor, color);

  var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
  voice.setStrict(false);
  voice.addTickables(notes);

  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 630);
  voice.draw(context, thirdStave);
}

// drawSong();
