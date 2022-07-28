import React from 'react';
import classnames from 'classnames';
require('iconfonts/money.svg');
require('iconfonts/statistics.svg');
require('iconfonts/tags.svg');
require('iconfonts/left.svg');
require('iconfonts/right.svg');

type Props = {
  name?:string
} & React.SVGAttributes<SVGAElement>

const Icon = (props:Props) => {
  const {name, className} = props
  return (
    <svg className={classnames('icon',className)} >
    {name && <use xlinkHref={'#' + name}/>}
    </svg>
  );  
};

export default Icon;