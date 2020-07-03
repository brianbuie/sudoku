export default function (keyFn, length) {
  const items = [];
  for (let key = 1; key <= length; key++) {
    items.push(keyFn(key));
  }
  return items;
}
