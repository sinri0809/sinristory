interface Props {
  size?: string;
  checked: boolean;
  tabIndex?: number;
  onChange: () => void;
}

const Switch = ({ size, checked, onChange, tabIndex }: Props) => {
  return (
    <span data-size={size} className={'switch-wrap'}>
      <label className={`switch`}>
        <input type="checkbox" onChange={onChange} checked={checked} />
        <span className="slider" />
      </label>
    </span>
  );
};

Switch.defaultProps = {
  size: 'small',
  tabIndex: 0, // tab focus
};

export default Switch;
