interface Props {
  size?: string;
  checked: boolean;
  tabIndex?: number;
  onChange: () => void;
  disabled?: boolean;
}

const Switch = ({ size, checked, onChange, tabIndex, disabled=false }: Props) => {
  return (
    <span data-size={size} className={'switch-wrap'} aria-disabled={disabled}>
      <label className={`switch`}>
        <input type="checkbox" onChange={onChange} checked={checked} disabled={disabled} />
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
