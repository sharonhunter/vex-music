VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element "song" - all things below will go into here.
var div = document.getElementById("song")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
// Size our svg:
renderer.resize(700, 125); // this is 700px wide and 125px tall
// And get a drawing context:
var context = renderer.getContext();
// Create a stave at position 10, 10 of width 675 on the canvas.
// these are x = 10, y = 10 for the left corner, and 675 seems to be the horizontal length of the staff
// var stave = new VF.Stave(10, 10, 675);
// AHA! A stave is a measure - so set your measure to 300 or whatever and join them with formatter
var stave = new VF.Stave(10, 10, 675);
// Add a clef and time signature (these can be separated also, like on second line of song needs no time sig)
// these are just "decorative"???
stave.addClef("treble").addTimeSignature("4/4");
// Connect it to the rendering context and draw!
// code up to here only prints the staff/measure, with no notes
stave.setContext(context).draw();
// was in a github answer but does nothing for me???
// stave.drawVerticalBar(50, true);

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

// awesome, this works too!!!!!
// notes[0].setKeyStyle(0, { fillStyle: 'chartreuse' });
// notes[1].setKeyStyle(0, { fillStyle: 'red' });
// notes[2].setKeyStyle(0, { fillStyle: 'blue' });

for (var i = notes.length - 1; i >= 0; i--) {
  console.log(notes[i]);
  console.log(notes[i].keys);
  if(notes[i].keys == "c/4"){
    console.log(notes[i]);
    notes[i].setKeyStyle(0, { fillStyle: 'lime' });
  }
}

// // Create a voice (staff)?? what is the voice exactly??? in 4/4 and add the above notes
var voice = new VF.Voice({num_beats: 4,  beat_value: 4});

// this also does not work for me, but was in github comments
// Vex.Flow.TIME4_4 = {
//   num_beats: 8,   //results: shows two measure 
//   beat_value: 4,
//   resolution: Vex.Flow.RESOLUTION
// };

// turn off tick counter (this lets you add a barline, but may be a hack???)
voice.setStrict(false);

voice.addTickables(notes); // add the notes from the array

// // Format and justify the notes to 600 pixels - still don't know why diff than 675?
var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 600);
// Render voice
voice.draw(context, stave);

// second line
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

renderer.resize(700, 125);

var context = renderer.getContext();

var stave = new VF.Stave(10, 10, 675);
// Add a clef but no time signature.
stave.addClef("treble");

stave.setContext(context).draw();
// everything defualts to treble, only need to specify clef in options object if bass like so:
//new VF.StaveNote({clef: "bass", keys: ["g/4"], duration: "q" }),

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

var voice = new VF.Voice({num_beats: 4,  beat_value: 4});

voice.setStrict(false);
voice.addTickables(notes);

var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 630);
voice.draw(context, stave);

// third line
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

renderer.resize(700, 125);

var context = renderer.getContext();

var stave = new VF.Stave(10, 10, 675);

stave.addClef("treble");
stave.setContext(context).draw();

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

var voice = new VF.Voice({num_beats: 4,  beat_value: 4});

voice.setStrict(false);
voice.addTickables(notes);

var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 630);
voice.draw(context, stave);
