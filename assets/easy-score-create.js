var VF = Vex.Flow;

// start the top line of music at these coordinates within the div id="song"
// the y coordinate seems to be set to a minimum within EasyScore itself
var x = 10;
var y = 10;

// somehow it is making the barlines itself, with no additional insructions, so...awesome?

function createMeasure(width) {
	// each vf.System is being used as a MEASURE in this example
  var system = vf.System({ x: x, y: y, width: width, spaceBetweenStaves: 10 });
  x += width;
  return system;
}

// Create an SVG renderer and attach it to the DIV element named "song".
// Other songs will have more or less lines or measures, so specify these as needed.
// the renderer creates and draws into the space on the page within which all of our music will be drawn
var vf = new VF.Factory({renderer: {elementId: 'song', width: 1046, height: 415}});

// specify that we want to use the EasyScore library inside of VexFlow
var score = vf.EasyScore();

// measure 1, which needs a clef (addClef) and time signature (addTimeSignature), and key (C major is default)
var system = createMeasure(275);
// addStave creates a "note container" ?? how to describe this...
// voices is where we define the notes we want to put inside the measure
system.addStave({
  voices: [score.voice(score.notes('C4/q, C4, G4, G4'))]
}).addClef('treble').addTimeSignature('4/4');

// measure 2
var system = createMeasure(250);
system.addStave({
  voices: [score.voice(score.notes('A4/q, A4, G4/h'))]
});

// measure 3
var system = createMeasure(250);
system.addStave({
  voices: [score.voice(score.notes('F4/q, F4, E4, E4'))]
});

// measure 4
var system = createMeasure(250);
system.addStave({
  voices: [score.voice(score.notes('D4/q, D4, C4/h'))]
});


// You don't need make a new context for a second line of music 
// (unless we define a new context, we are still in the original(<div id = "song">))
// Just specify a higher "y" coordinate which positions the second line lower on the page
x = 10;
y += 130;

// line 2

// measure 5
var system1 = createMeasure(275);
system1.addStave({
  voices: [score.voice(score.notes('G4/q, G4, F4, F4'))]
}).addClef('treble');

// measure 6
var system2 = createMeasure(250);
system2.addStave({
  voices: [score.voice(score.notes('E4/q, E4, D4/h'))]
});

// measure 7
var system = createMeasure(250);
system.addStave({
  voices: [score.voice(score.notes('G4/q, G4, F4, F4'))]
});

// measure 8
var system = createMeasure(250);
system.addStave({
  voices: [score.voice(score.notes('E4/q, E4, D4/h'))]
});

// line 3

x = 10;
y += 130;

// measure 9
var system1 = createMeasure(275);
system1.addStave({
  voices: [score.voice(score.notes('C4/q, C4, G4, G4'))]
}).addClef('treble');

// measure 10
var system2 = createMeasure(250);
system2.addStave({
  voices: [score.voice(score.notes('A4/q, A4, G4/h'))]
});

// measure 11
var system = createMeasure(250);
system.addStave({
  voices: [score.voice(score.notes('F4/q, F4, E4, E4'))]
});

// measure 12
var system = createMeasure(250);
system.addStave({
  voices: [score.voice(score.notes('D4/q, D4, C4/h'))]
});
system.addConnector('boldDoubleRight');

// the call to vf.draw(); only needs to happen once at the very end to draw everything all at once
vf.draw();


// note: CSS in the head style tag will still override this function, not sure about in css file
function colorNotesOrange(){
	var noteheads = document.querySelectorAll('.vf-notehead > path');
	for (var i = noteheads.length - 1; i >= 0; i--) {
		// console.log(noteheads[i].getAttribute('fill')); // black even when CSS is green
		noteheads[i].setAttribute('fill', 'orange');
	}
}

function colorNotesGreen(){
	var noteheads = document.querySelectorAll('.vf-notehead > path');
	for (var i = noteheads.length - 1; i >= 0; i--) {
		// console.log(noteheads[i].getAttribute('fill')); // black even when CSS is green
		noteheads[i].setAttribute('fill', 'lime');
	}
}

function colorNotesBlack(){
	var noteheads = document.querySelectorAll('.vf-notehead > path');
	for (var i = noteheads.length - 1; i >= 0; i--) {
		// console.log(noteheads[i].getAttribute('fill')); // black even when CSS is green
		noteheads[i].setAttribute('fill', 'black');
	}
}