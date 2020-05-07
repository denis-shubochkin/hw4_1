
export default function check(a) {
  try {
    if (parseInt(a, 10)) {
      return parseInt(a, 10);
    }
    throw new Error(`Введите число,'${a}' - это не число`);
  } catch (e) {
    return e;
  }
}
