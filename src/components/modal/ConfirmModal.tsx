'use Client';

import React from 'react';
import Modal from '../layout/Modal';

type Props = {
  open: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal = (props: Props) => {
  const { open, title, description, onConfirm, onCancel } = props;

  return <Modal open={open} title={title} description={description} onConfirm={onConfirm} onCancel={onCancel} />;
};

export default ConfirmModal;
