import React, { InputHTMLAttributes, forwardRef, Ref } from 'react';

import IconButton from 'components/icons/IconButton';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  requiredMessage?: string;
  invalidMessage?: string;
  categoryTitle?: string;
}

const TextField = forwardRef(
  (props: Props, forwardedRef: Ref<HTMLInputElement>) => {
    const {
      requiredMessage = '',
      invalidMessage = '입력해주세요',
      categoryTitle = '',
    } = props;

    const handleClearInput = () => {
      if (props.onChange) {
        // props.onChange("");
        props.onChange({
          target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <div className="textfield-container" tabIndex={0}>
        {categoryTitle !== '' && (
          <h6 className="textfield-title">{categoryTitle}</h6>
        )}
        <div className="textfield-wrap" data-focus={props.value !== ''}>
          <input
            // ref={forwardRef}
            type={props.type}
            className="textfield-input"
            // placeholder={"textfield-placeholder"}
            value={props.value}
            onChange={props.onChange}
            pattern={props.pattern}
            // FIXME: 유효성 검사 구현
            onInvalid={props.onInvalid}
            required={requiredMessage !== '' || props.required}
            autoFocus={props.autoFocus}
          />
          <IconButton
            data="icon-close"
            name="text-clear"
            className="btn-textfield-clear"
            onClick={handleClearInput}
          />
          <label htmlFor="textfield-input" className="textfield-placeholder">
            <span className="placeholder-text">
              {requiredMessage}
              {requiredMessage && props.required && (
                <span className="required">&#42;</span>
              )}
            </span>
          </label>
        </div>
        <span className="invalid-message">{invalidMessage}</span>
      </div>
    );
  }
);

export default TextField;
