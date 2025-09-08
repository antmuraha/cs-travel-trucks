function classnames(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default classnames;
