import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Notes = ({ notes, onRemove }) => (
  <TransitionGroup component='ul' className='list-group'>
    {notes.map((note) => (
      <CSSTransition key={note.id} classNames={'note'} timeout={800}>
        <li className='list-group-item note'>
          <div>
            <strong>{note.tittle}</strong>
            <span>{note.date}</span>
          </div>

          <button
            type='button'
            className='btn btn-outline-warning btn-sm'
            onClick={() => onRemove(note.id)}
          >
            &times;
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);
