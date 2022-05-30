import React from 'react';
import { Button } from 'antd';
import { LABELS } from '../../constants';
import { useHistory } from 'react-router-dom';

export const BackButton = () => {
  const History = useHistory();
  return (
    <Button type="text" onClick={History.goBack}>
      {LABELS.GO_BACK_ACTION}
    </Button>
  );
};
