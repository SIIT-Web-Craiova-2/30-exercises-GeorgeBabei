const getAngleType = (angle) => {
  if (angle >= 0 && angle < 90) {
    return "Acute angle";
  } else if (angle == 90) {
    return "Right angle";
  } else if (angle < 180) {
    return "Obtuse angle";
  } else return "Straight angle";
};
console.log(getAngleType(85));
