const random = max => Math.floor(Math.random() * max);

export const attention = () => {
  const animations = ['jello', 'shake', 'wobble', 'tada', 'swing'];
  const index = random(animations.length);

  return animations[index];
};

export const entrances = () => {
  const animations = [
    'zoomInDown',
    'zoomInUp',
    'lightSpeedIn',
    'flipInY',
    'bounceInLeft'];
  const index = random(animations.length);

  return animations[index];
};

export const exits = () => {
  const animations = [
    'zoomOutDown',
    'zoomOutUp',
    'lightSpeedOut',
    'flipOutY',
    'bounceOutRight'];
  const index = random(animations.length);

  return animations[index];
};