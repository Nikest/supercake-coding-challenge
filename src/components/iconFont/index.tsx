const icons = {
  bird: 'icon-bird',
  cat: 'icon-cat',
  dog: 'icon-dog',
  hamster: 'icon-hamster',
  rat: 'icon-rat',
  search: 'icon-search',
  arrowDown: 'icon-arrow-down',
}  as const;

type IconName = keyof typeof icons;

interface Props<T extends IconName = IconName> {
  name: T;
}

export const IconFont: React.FC<Props> = ({ name }) => (
  <i className={`${icons[name]}`} />
);