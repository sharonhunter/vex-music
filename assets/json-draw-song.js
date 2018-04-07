var VF = Vex.Flow;

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
  var copiedStave = Object.assign({}, staveObject);
  copiedStave.voices.forEach(function(voice){
    voice.measures.forEach(function(measure){
      measure.notes.forEach(noteFn);
    })
  })
  return copiedStave;
}

function colorByPitch(staveObject, pitchToColor, color){
  return applyToNotes(staveObject, function(note){
    note.keys == pitchToColor ? note.color = color : note.color = 'black';
  })
}

function colorByDuration(staveObject, durationToColor, color){
  return applyToNotes(staveObject, function(note){
    if(note.duration == durationToColor){
      note.color = color;
    }
  })
}

function renderStaveToDiv(staveObject, div) {
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

function drawSongToPage(staveArray, options){
  var div = createSongDiv(options.containerId, options.divId);
  // make a copy of staveArray and color each stave's pitches or durations
  var staveArrayCopy = staveArray.map(function(item){
    var coloredItem = colorByPitch(item, options.pitchToColor, options.color);
    coloredItem = colorByDuration(coloredItem, options.durationToColor, options.color);
    return coloredItem;
  })

  // render each element of staveArrayCopy
  staveArrayCopy.forEach(function(s){
    renderStaveToDiv(s, div);
  })
}

export {drawSongToPage};
