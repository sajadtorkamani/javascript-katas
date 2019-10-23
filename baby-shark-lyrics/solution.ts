const babySharkLyrics = (): string => {
  return (
    [
      'Baby shark',
      'Mommy shark',
      'Daddy shark',
      'Grandma shark',
      'Grandpa shark',
      "Let's go hunt"
    ]
      .map(printChorus)
      .join('') + 'Run away,…'
  );
};

export const printChorus = (sentence: string): string => {
  return `${sentence}, doo doo doo doo doo doo\n`.repeat(3) + `${sentence}!\n`;
};

export default babySharkLyrics;
