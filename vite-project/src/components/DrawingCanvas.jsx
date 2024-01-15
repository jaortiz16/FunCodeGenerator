import React, { useRef } from 'react';
import { Stage, Layer, Line, Rect, Text, Transformer, Circle } from 'react-konva';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';

function DrawingCanvas() {
  const [tool, setTool] = React.useState('pen');
  const [lines, setLines] = React.useState([]);
  const [rectangles, setRectangles] = React.useState([]);
  const [circles, setCircles] = React.useState([]);
  const [lineColor, setLineColor] = React.useState('#000000');
  const [lineWidth, setLineWidth] = React.useState(5);
  const [selectedId, selectShape] = React.useState(null);
  const [borderWidth, setBorderWidth] = React.useState(2);
  const [borderColor, setBorderColor] = React.useState('#000000');
  const [fillEnabled, setFillEnabled] = React.useState(false);
  const [fillColor, setFillColor] = React.useState('#ffffff');

  const stageRef = useRef(null);
  const isDrawing = useRef(false);

  const handleMouseDown = (e) => {
    if (tool === 'pen') {
      isDrawing.current = true;
      const pos = e.target.getStage().getPointerPosition();
      setLines([...lines, { tool, color: lineColor, width: lineWidth, points: [pos.x, pos.y] }]);
    } else if (tool === 'square' || tool === 'circle' || tool === 'select') {
      const pos = e.target.getStage().getPointerPosition();
      if (tool === 'square' && !selectedId) {
        const newRectangle = {
          x: pos.x,
          y: pos.y,
          width: 50,
          height: 50,
          stroke: borderColor,
          strokeWidth: borderWidth,
          fill: fillEnabled ? fillColor : 'transparent',
          id: `rect-${rectangles.length + 1}`,
        };
        setRectangles([...rectangles, newRectangle]);
        selectShape(newRectangle.id);
      } else if (tool === 'circle' && !selectedId) {
        const newCircle = {
          x: pos.x,
          y: pos.y,
          radius: 25,
          stroke: borderColor,
          strokeWidth: borderWidth,
          fill: fillEnabled ? fillColor : 'transparent',
          id: `circle-${circles.length + 1}`,
        };
        setCircles([...circles, newCircle]);
        selectShape(newCircle.id);
      } else if (tool === 'select') {
        const clickedShape = e.target;
        if (clickedShape && clickedShape.attrs.id) {
          selectShape(clickedShape.attrs.id);
        }
      }
    } else if (tool === 'eraser') {
      const pos = e.target.getStage().getPointerPosition();
      const shapes = stageRef.current.find(`.${tool}`);
      shapes.each((shape) => {
        if (shape.intersects({ x: pos.x, y: pos.y })) {
          if (shape.getClassName() === 'Rect') {
            const updatedRectangles = rectangles.filter((rect) => rect.id !== shape.attrs.id);
            setRectangles(updatedRectangles);
          } else if (shape.getClassName() === 'Circle') {
            const updatedCircles = circles.filter((circle) => circle.id !== shape.attrs.id);
            setCircles(updatedCircles);
          }
        }
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    setLines([...lines]);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleDblClick = () => {
    const selectedShape = rectangles.find((rect) => rect.id === selectedId) || circles.find((circle) => circle.id === selectedId);
    if (selectedShape) {
      selectShape(null);
      const tr = stageRef.current.findOne('.transformer');
      tr.nodes([]);
      tr.getLayer().batchDraw();
    }
  };

  const handleUndo = () => {
    if (lines.length > 0 || rectangles.length > 0 || circles.length > 0) {
      setLines(lines.slice(0, -1));
      setRectangles(rectangles.slice(0, -1));
      setCircles(circles.slice(0, -1));
    }
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'z') {
      handleUndo();
    }
  };

  const handleStageClick = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      if (tool === 'select') {
        selectShape(null);
        const tr = stageRef.current.findOne('.transformer');
        tr.nodes([]);
        tr.getLayer().batchDraw();
      } else if (tool === 'square') {
        const pos = e.target.getStage().getPointerPosition();
        const newRectangle = {
          x: pos.x,
          y: pos.y,
          width: 50,
          height: 50,
          stroke: borderColor,
          strokeWidth: borderWidth,
          fill: fillEnabled ? fillColor : 'transparent',
          id: `rect-${rectangles.length + 1}`,
        };
        setRectangles([...rectangles, newRectangle]);
        selectShape(newRectangle.id);
      } else if (tool === 'circle') {
        const pos = e.target.getStage().getPointerPosition();
        const newCircle = {
          x: pos.x,
          y: pos.y,
          radius: 25,
          stroke: borderColor,
          strokeWidth: borderWidth,
          fill: fillEnabled ? fillColor : 'transparent',
          id: `circle-${circles.length + 1}`,
        };
        setCircles([...circles, newCircle]);
        selectShape(newCircle.id);
      }
    }
  };

  return (
    <div
      className="flex flex-col items-center mt-8"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onDblClick={handleDblClick}
        onClick={handleStageClick}
        ref={stageRef}
      >
        <Layer>
          <Text text="¡Comienza a dibujar!" x={5} y={30} />
          {lines.map((line, i) => (
            <Line
              key={`line-${i}`}
              points={line.points}
              stroke={line.color}
              strokeWidth={line.width}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
          {rectangles.map((rect) => (
            <Rect
              key={rect.id}
              {...rect}
              draggable={tool === 'select'}
              onClick={() => selectShape(rect.id)}
              onTap={() => selectShape(rect.id)}
              onTransformEnd={(e) => {
                const node = e.target;
                const scaleX = node.scaleX();
                const scaleY = node.scaleY();

                node.scaleX(1);
                node.scaleY(1);

                const updatedRectangles = rectangles.map((r) => {
                  if (r.id === rect.id) {
                    return {
                      ...r,
                      x: node.x(),
                      y: node.y(),
                      width: Math.max(5, node.width() * scaleX),
                      height: Math.max(node.height() * scaleY),
                    };
                  }
                  return r;
                });

                setRectangles(updatedRectangles);
              }}
            />
          ))}
          {circles.map((circle) => (
            <Circle
            key={circle.id}
            {...circle}
            draggable={tool === 'select'}
            onClick={() => selectShape(circle.id)}
            onTap={() => selectShape(circle.id)}
            onTransformEnd={(e) => {
              const node = e.target;
              const scaleX = node.scaleX();
              const scaleY = node.scaleY();
          
              // Ajusta la lógica para permitir la escala en ambos ejes
              const updatedCircles = circles.map((c) => {
                if (c.id === circle.id) {
                  return {
                    ...c,
                    x: node.x(),
                    y: node.y(),
                    radiusX: Math.max(5, node.radiusX() * scaleX),
                    radiusY: Math.max(5, node.radiusY() * scaleY),
                  };
                }
                return c;
              });
          
              setCircles(updatedCircles);
            }}
          />
          
          
          
          
          ))}
          {selectedId && (
            <Transformer
              ref={(node) => {
                if (node && (tool === 'select' || tool === 'square' || tool === 'circle')) {
                  const tr = node;
                  const selectedShape = rectangles.find((rect) => rect.id === selectedId) || circles.find((circle) => circle.id === selectedId);
                  tr.nodes([stageRef.current.findOne(`#${selectedShape.id}`)]);
                }
              }}
            />
          )}
        </Layer>
      </Stage>
      <div className="mt-4 flex items-center">
        <label className="mr-2">Herramienta:</label>
        <div className="relative inline-flex">
          <select
            value={tool}
            onChange={(e) => {
              setTool(e.target.value);
            }}
            className="rounded-md border border-gray-300 bg-white text-gray-700 leading-tight focus:outline-none focus:border-blue-500 px-3 py-1"
          >
            <option value="pen">Lápiz</option>
            <option value="eraser">Borrador</option>
            <option value="square">Cuadrado</option>
            <option value="circle">Círculo</option>
            <option value="select">Seleccionar</option>
            <option value="text">Texto</option>
            <option value="line">Línea</option>
            <option value="arrow">Flecha</option>
            <option value="star">Triangulo</option>
          </select>
          {tool === 'pen' && (
            <div className="absolute right-0 top-0 mt-1 mr-1">
              <FontAwesomeIcon icon={faPen} className="text-gray-600" />
            </div>
          )}
        </div>
      </div>
      {tool === 'pen' && (
        <div className="mt-4 flex items-center">
          <label className="mr-2">Color:</label>
          <input
            type="color"
            value={lineColor}
            onChange={(e) => setLineColor(e.target.value)}
            className="border border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-1 rounded-md"
          />
        </div>
      )}
      {tool === 'pen' && (
        <div className="mt-4 flex items-center">
          <label className="mr-2">Grosor:</label>
          <input
            type="range"
            min="1"
            max="20"
            value={lineWidth}
            onChange={(e) => setLineWidth(parseInt(e.target.value, 10))}
            className="border border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-1 rounded-md"
          />
          <span className="ml-2">{lineWidth}</span>
        </div>
      )}
      {(tool === 'square' || tool === 'circle') && (
        <div className="mt-4 flex items-center">
          <label className="mr-2">Grosor del Borde:</label>
          <input
            type="number"
            value={borderWidth}
            onChange={(e) => setBorderWidth(parseInt(e.target.value, 10))}
            min="1"
            className="border border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-1 rounded-md"
          />
        </div>
      )}
      {(tool === 'square' || tool === 'circle') && (
        <div className="mt-4 flex items-center">
          <label className="mr-2">Color del Borde:</label>
          <input
            type="color"
            value={borderColor}
            onChange={(e) => setBorderColor(e.target.value)}
            className="border border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-1 rounded-md"
          />
        </div>
      )}
      {tool === 'square' && (
        <div className="mt-4 flex items-center">
          <label className="mr-2">Relleno:</label>
          <input
            type="checkbox"
            checked={fillEnabled}
            onChange={(e) => setFillEnabled(e.target.checked)}
            className="mr-2"
          />
          {fillEnabled && (
            <div className="flex items-center">
              <label className="mr-2">Color del Relleno:</label>
              <input
                type="color"
                value={fillColor}
                onChange={(e) => setFillColor(e.target.value)}
                className="border border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-1 rounded-md"
              />
            </div>
          )}
        </div>
      )}
      <div className="mt-4 flex items-center">
        <button
          onClick={handleUndo}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Deshacer
        </button>
      </div>
    </div>
  );
}

export default DrawingCanvas;
