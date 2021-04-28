import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Lottie from 'react-lottie';
import './App.css';
import apple from './lottie-animations/apple.json';
import box from './lottie-animations/surprise-box.json';

const rows = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

const getRandomLocation = (rows: string[], columns: string[], prevLocation: string[], chestZone: string[]): string => {
  const location = `${columns[Math.floor(Math.random() * columns.length)]}${rows[Math.floor(Math.random() * rows.length)]}`;

  if (chestZone.includes(location)) {
    return getRandomLocation(rows, columns, prevLocation, chestZone);
  }

  for (let i = 0; i < prevLocation.length; i++) {
    if (location === prevLocation[i]) {
      return getRandomLocation(rows, columns, prevLocation, chestZone);
    }
  }
  return location;
}

const getChestZone = (rows: string[], columns: string[]) => {
  const xIndex = Math.floor(Math.random() * rows.length);
  const yIndex = Math.floor(Math.random() * columns.length);

  const arr = [
    `${columns[yIndex]}${rows[xIndex]}`,
    `${columns[yIndex]}${rows[xIndex] === '1' ? rows[xIndex + 1] : rows[xIndex - 1]}`,
    `${columns[yIndex] === 'a' ? columns[yIndex + 1] : columns[yIndex - 1]}${rows[xIndex]}`,
    `${columns[yIndex] === 'a' ? columns[yIndex + 1] : columns[yIndex - 1]}${rows[xIndex] === '1' ? rows[xIndex + 1] : rows[xIndex - 1]}`,
  ].sort();

  return [...arr.slice(0, 2).sort((a, b) => Number(a.slice(1)) - Number(b.slice(1))), ...arr.slice(2).sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)))]
}

const objQuantity = 4;

function App() {
  const [objsLocations, setObjsLocations] = useState<string[]>([]);
  const [chestZone] = useState<string[]>(getChestZone(rows, columns));
  const [appleAnim, setAppleAnim] = useState(true);
  const [boxAnim, setBoxAnim] = useState(false);

  function handleOnDragEnd(result: any) {
    setAppleAnim(true);
    setBoxAnim(false);
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

  function handleOnDragUpdate(result: any) {
    setAppleAnim(false);
    if (!result.destination) return;
    // console.log(result)
    if (chestZone.includes(result.destination.droppableId)) {
      setBoxAnim(true);
    } else {
      setBoxAnim(false);
    }
  }

  useEffect(() => {
    for (let i = 1; i <= objQuantity; i++) {
      setObjsLocations(prev => [...prev, getRandomLocation(rows, columns, prev, chestZone)]);
    }
  }, [chestZone])

  const defaultAppleOptions = {
    loop: true,
    autoplay: true, 
    animationData: apple,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultBoxOptions = {
    loop: true,
    autoplay: false, 
    animationData: box,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{objsLocations.length ? 'Collect all apples in the box' : 'Great job!'}</h1>
        <DragDropContext onDragEnd={handleOnDragEnd} onDragUpdate={handleOnDragUpdate}>
          {rows.map((r) => {
            return <div key={r} style={{display: 'flex'}}>
            {columns.map(c => {
              const objLocation = objsLocations.find(l => l ===`${c}${r}`);
              return <Droppable key={`${c}${r}`} droppableId={`${c}${r}`} isDropDisabled={!!objLocation}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={{outline: chestZone.includes(`${c}${r}`) ? 'none' : '1px solid', width: '30px', height: '30px', position: 'relative'}}>
                  {`${c}${r}` === chestZone[0] && <div style={{position: 'absolute', left: -60, top: -60}}>
                    <Lottie width={180} height={180} options={defaultBoxOptions} isStopped={!boxAnim}/> 
                  </div>}
                  {objLocation && <Draggable disableInteractiveElementBlocking draggableId={`${objsLocations.indexOf(objLocation)}`} index={objsLocations.indexOf(objLocation)}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Lottie width={30} height={30} options={defaultAppleOptions} isStopped={!appleAnim}/>
                        </div>
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