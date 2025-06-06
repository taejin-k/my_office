'use Client';

import React from 'react';
import Modal from '../layout/Modal';

type Props = {
  open: boolean;
  title: string;
  description: string;
  onCancel: () => void;
};

const AlertModal = (props: Props) => {
  const { open, title, description, onCancel } = props;

  return <Modal open={open} title={title} description={description} onCancel={onCancel} />;
};

export default AlertModal;
