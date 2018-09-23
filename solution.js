export const aliBaba = commands => {
  const OPEN_COMMAND = 'Open, Sesame!';
  const SHUT_COMMAND = 'Shut, Sesame!';

  if (commands.includes(OPEN_COMMAND)
    && commands.includes(SHUT_COMMAND)
    && commands.indexOf(OPEN_COMMAND) < commands.indexOf(SHUT_COMMAND)
  ) {
    return 'Ali Baba got a lot of treasures and he lived a rich life.';
  }

  if ((commands.includes(OPEN_COMMAND) && !commands.includes(SHUT_COMMAND))
    || commands.indexOf(SHUT_COMMAND) < commands.indexOf(OPEN_COMMAND)
  ) {
    return 'Ali Baba got a lot of treasure and he was finally killed by the robbers.';
  }

  return 'Ali Baba didn\'t get the treasure and he was still a poor man.';
};