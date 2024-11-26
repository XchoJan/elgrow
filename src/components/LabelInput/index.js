import React, { useCallback, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './css/index.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function LabelInput({
  wrapperClassName, label, value, onChange, isTextArea, ...p
}: any) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const onInputFocusChange = val => () => {
    setIsFocused(val);
  };

  const onWrapperClick = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };



  return (
    <div className={classNames(styles.wrapper, wrapperClassName)} onClick={onWrapperClick}>
      <div className={classNames(styles.labelSection)}>
        <p className={classNames(styles.label, styles.labelFloating, { [styles.labelOfSelected]: isFocused || value?.length })}>{label}</p>
        <p className={classNames(styles.label, styles.labelUnderlay)}>{label}</p>
      </div>
      <div className={styles.inputSection}>
        {isTextArea ? (
          <textarea
            ref={inputRef}
            onFocus={onInputFocusChange(true)}
            onBlur={onInputFocusChange(false)}
            value={value}
            onChange={onChange}
            {...p}
          />
        ) : (
          <input
            ref={inputRef}
            onFocus={onInputFocusChange(true)}
            onBlur={onInputFocusChange(false)}
            value={value}
            onChange={onChange}
            {...p}
          />
        )}
      </div>
    </div>
  );
}

export default LabelInput;
