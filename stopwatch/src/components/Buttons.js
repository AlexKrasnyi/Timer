import React from 'react'
import { fromEvent } from 'rxjs';
import { map, buffer, debounceTime, filter } from 'rxjs/operators';

export const Buttons = (props) => {
  const mouseClick = fromEvent(document, 'click')

const click = mouseClick.pipe(
  buffer(mouseClick.pipe(debounceTime(300))),
  map(list => {
    return list.length;
  }),
  filter(x => x === 2),
)
  const doubleClic = () => {	
    click.subscribe(() => {
      props.wait()
    })
  }

  return (
    <div className='buttons'>
			{props.run ? <button className='buttons__stop' onClick={props.stop}>Stop</button> : <button className='buttons__start' onClick={props.start}>Start</button> }
			<button className='buttons__wait' onClick={doubleClic}>Wait</button>
			<button className='buttons__reset' onClick={props.reset}>Reset</button>
    </div>
    )
}