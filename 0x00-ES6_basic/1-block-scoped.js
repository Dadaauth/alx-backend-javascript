export default function taskBlock(trueOrFalse) {
  function getTask(task, task2) {
    return [task, task2];
  }
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    getTask(task, task2);
  }

  return [task, task2];
}
