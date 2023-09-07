import React from 'react';

import { AccountantType } from '../../api/types';

const AccountantCard = ({ cell, name, email, picture, login }: AccountantType) => {

  return (
    <div>
      AccountantCard
      {cell}
      {name.first}
      {name.last}
      {email}
      {picture.thumbnail}
      {picture.medium}
      {login.uuid}
    </div>
  );
};

export default AccountantCard;
