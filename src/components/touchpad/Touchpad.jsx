import React from 'react';

export const mouseDownHandler = (ele, e) => {
  ele.style.cursor = 'grabbing';
  ele.style.userSelect = 'none';

  const pos = {
    left: ele.scrollLeft,
    top: ele.scrollTop,
    x: e.clientX,
    y: e.clientY,
  };

  const mouseMoveHandler = (e) => {
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = () => {
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
};

const Touchpad = () => {

  return (
    <div>Touchpad</div>
  )
}

export default Touchpad