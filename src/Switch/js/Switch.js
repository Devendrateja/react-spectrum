/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SwitchBase from './SwitchBase';

importSpectrumCSS('toggle');

export default function Switch({
  variant, // 'ab'
  quiet,
  className,
  ...otherProps
}) {
  return (
    <SwitchBase
      inputType="checkbox"
      className={
        classNames(
          'spectrum-ToggleSwitch',
          {
            [`spectrum-ToggleSwitch--${variant}`]: variant,
            'spectrum-ToggleSwitch--quiet': quiet
          },
          className
        )
      }
      inputClassName="spectrum-ToggleSwitch-input"
      markClassName="spectrum-ToggleSwitch-switch"
      labelClassName="spectrum-ToggleSwitch-label"
      role="switch"
      {...otherProps} />
  );
}

Switch.displayName = 'Switch';
Switch.propTypes = {
  /**
  * Class given to switch
  */
  className: PropTypes.string,

  /**
  * Whether the switch is checked or not (controlled state)
  */
  checked: PropTypes.bool,

  /**
  * Whether the switch should be checked (uncontrolled state)
  */
  defaultChecked: PropTypes.bool,

  /** Text to add to switch. Can be Text of HTML */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
  * Function called when switch is changed
  */
  onChange: PropTypes.func,

  /**
  * Whether switch is a quiet variation
  */
  quiet: PropTypes.bool,

  /**
  * Change switch to A/B variant rather an on/off
  */
  variant: PropTypes.oneOf(['ab'])

};