export default function(merge) {
  let defaultProps = {
    range: 12,
    from: 0,
    unit: 3,
  };

  return Object.assign({}, defaultProps, merge);
};
