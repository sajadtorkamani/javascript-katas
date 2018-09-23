import { aliBaba } from './solution';


describe('aliBaba', () => {
  test('returns correct result when the open and shut commands are both present ', () => {
    const commands = [
      "Open, Millet!", "Open, Maize!", "Open, Soybean!",
      "Oh, Damn! I'm going to smash you into pieces!",
      "Open, Sesame!", "God bless! A lot of treasures!",
      "Why do I have only two hands?", "Shut, Maize!",
      "Shut, Soybean!", "Please shut! Dear Mr. door!",
      "Shut, Sesame!", "Haha, I'm so smart!"
    ];

    const expected = "Ali Baba got a lot of treasures and he lived a rich life.";

    expect(aliBaba(commands)).toEqual(expected);
  });

  test('returns correct result when only open command is present', () => {
    const commands = [
      "Open, Millet!", "Open, Maize!", "Open, Soybean!",
      "Oh, Damn! I'm going to smash you into pieces!",
      "Open, Sesame!", "God bless! A lot of treasures!",
      "Why do I have only two hands?", "Shut, Maize!",
      "Shut, Soybean!", "Please shut! Dear Mr. door!"
    ];

    const expected = "Ali Baba got a lot of treasure and he was finally killed by the robbers.";

    expect(aliBaba(commands)).toEqual(expected);
  });

  test('returns correct result when shut command is present before open command', () => {
    const commands = [
      "Open, Millet!", "Open, Maize!", "Open, Soybean!",
      "Oh, Damn! I'm going to smash you into pieces!",
      "Shut, Sesame!", "Open, Sesame!", "Haha, I'm so smart!"
    ];

    const expected = "Ali Baba got a lot of treasure and he was finally killed by the robbers.";

    expect(aliBaba(commands)).toEqual(expected);
  });

  test('returns correct result when open command is not present', () => {
    const commands = [
      "Open, Millet!", "Open, Maize!", "Open, Soybean!",
      "Oh, Damn! I'm going to smash you into pieces!",
      "Open, Millet!", "Open, Maize!", "Open, Soybean!",
      "Oh, Damn! I'm going to smash you into pieces!"
    ];

    const expected = "Ali Baba didn't get the treasure and he was still a poor man.";

    expect(aliBaba(commands)).toEqual(expected);
  });

});
