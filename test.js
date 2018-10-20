import { fireFight } from './solution';

describe('fireFight', () => {
  test('returns correct result', () => {
    expect(fireFight(
      "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"
    )).toEqual(
      "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast");
  });
});