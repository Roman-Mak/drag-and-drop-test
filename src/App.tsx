import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const rows = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

const getRandomLocation = (rows: string[], columns: string[], prevLocation: string[], chestZone: string[]): string => {
  const location = `${columns[Math.floor(Math.random() * columns.length)]}${rows[Math.floor(Math.random() * rows.length)]}`;

  for (let i = 0; i < prevLocation.length; i++) {
    if ((location === prevLocation[i]) || chestZone.includes(location)) {
      return getRandomLocation(rows, columns, prevLocation, chestZone);
    }
  }
  return location;
}

const getChestZone = (rows: string[], columns: string[]) => {
  const xIndex = Math.floor(Math.random() * rows.length);
  const yIndex = Math.floor(Math.random() * columns.length);

  return [
    `${columns[yIndex]}${rows[xIndex]}`,
    `${columns[yIndex]}${rows[xIndex] === '1' ? rows[xIndex + 1] : rows[xIndex - 1]}`,
    `${columns[yIndex] === 'a' ? columns[yIndex + 1] : columns[yIndex - 1]}${rows[xIndex]}`,
    `${columns[yIndex] === 'a' ? columns[yIndex + 1] : columns[yIndex - 1]}${rows[xIndex] === '1' ? rows[xIndex + 1] : rows[xIndex - 1]}`,
  ];
}

const objQuantity = 4;

function App() {
  const [objsLocations, setObjsLocations] = useState<string[]>([]);
  const [chestZone] = useState<string[]>(getChestZone(rows, columns))

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    if (chestZone.includes(result.destination.droppableId)) {
      return setObjsLocations(objsLocations.filter(el => el !== result.source.droppableId));
    }

    setObjsLocations(prev => {
      return prev.map((el, i) => {
        if (i === result.source.index && !prev.includes(result.destination.droppableId)) {
          el = result.destination.droppableId
        }
        return el
      })
    })
  }

  useEffect(() => {
    for (let i = 1; i <= objQuantity; i++) {
      setObjsLocations(prev => [...prev, getRandomLocation(rows, columns, prev, chestZone)]);
    }
    console.log(getChestZone(rows, columns));
  }, [chestZone])

  return (
    <div className="App">
      <header className="App-header">
        <h1>{objsLocations.length ? 'Collect all apples in the box' : 'Great job!'}</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          {rows.map((r) => {
            return <div key={r} style={{display: 'flex'}}>
            {columns.map(c => {
              const objLocation = objsLocations.find(l => l ===`${c}${r}`);
              return <Droppable key={`${c}${r}`} droppableId={`${c}${r}`} isDropDisabled={!!objLocation}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={{border: '1px solid', width: '30px', height: '30px', backgroundColor: chestZone.includes(`${c}${r}`) ? 'brown' : 'white'}}>
                  {objLocation && <Draggable disableInteractiveElementBlocking draggableId={`${objsLocations.indexOf(objLocation)}`} index={objsLocations.indexOf(objLocation)}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="circle"/>
                      )}
                    </Draggable>}
                    {provided.placeholder}
                </div>
              )}
            </Droppable>
          })}
          </div>
        })}
          {/* <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <p>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
              </ul>
            )}
          </Droppable> */}
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;