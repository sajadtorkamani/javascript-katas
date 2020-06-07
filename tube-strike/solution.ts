const WALK_SPEED = 5;
const BUS_SPEED = 8;

export const calculator = (
  walkDistance: number,
  busDriveDistance: number,
  busWalkDistance: number
): 'Bus' | 'Walk' => {
  const walkTime = walkDistance / WALK_SPEED;
  const busTime = (busDriveDistance / BUS_SPEED) + (busWalkDistance / WALK_SPEED); // prettier-ignore

  // Walk is over 2 hours
  if (walkTime > 2) {
    return 'Bus';
  }

  // Walk is under 10 minutes
  // prettier-ignore
  if (walkTime < (10 / 60)) {
    return 'Walk';
  }

  return walkTime <= busTime ? 'Walk' : 'Bus';
};
