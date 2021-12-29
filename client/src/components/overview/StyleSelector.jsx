import React from 'react';

import { SelectStyleWrapper, StyleButton } from '../../../dist/overviewStyling.js';

export const StyleSelector = (props) => {

  return (
    <SelectStyleWrapper>
      <div>Select Style / Color</div>
      <div>{props.styles.map((style) => {
        return (
          <StyleButton key={style.style_id} onClick={()=> {
            props.selectStyle(style);
            props.setCurrentImage(style.photos[0].url)
          }}>
            {style.name}
          </StyleButton>
        )
      })}
      </div>
    </SelectStyleWrapper>
  )
}