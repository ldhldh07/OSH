import StudioNoteContainer from 'components/molecules/studionote/StudioNoteContainer';
import StudioNoteScroll from 'components/molecules/studionote/StudioNoteScroll';
import React, { useState } from 'react';
import './StudioNote.scss';
import { Note } from 'types/Note';

interface StudioNoteProps {
  scrollPosition: number;
  updateScrollPosition: (position: number) => void;
  notes: Note[];
  updateNote: (name: string, timing: number) => void;
  playNote: (noteName: string | string[]) => void;
  noteColumnStyle: boolean[];
}
const StudioNote = ({
  scrollPosition,
  updateScrollPosition,
  updateNote,
  playNote,
  notes,
  noteColumnStyle,
}: StudioNoteProps) => {
  return (
    <div className="studio__note">
      <StudioNoteScroll
        notes={notes}
        scrollPosition={scrollPosition}
        updateScrollPosition={updateScrollPosition}
        noteColumnStyle={noteColumnStyle}
      />
      <StudioNoteContainer
        notes={notes}
        scrollPosition={scrollPosition}
        updateScrollPosition={updateScrollPosition}
        updateNote={updateNote}
        playNote={playNote}
        noteColumnStyle={noteColumnStyle}
      />
    </div>
  );
};

export default StudioNote;
