import ev from './events';

ev.on('testeEvent', () => {
  console.log('ouviu também');
});
ev.emit('testeEvent', 'bla bla bla');
