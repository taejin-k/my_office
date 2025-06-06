'use client';

import React, { ReactNode } from 'react';
import { Modal as AntModal, Button, Flex } from 'antd';

type Props = {
  open: boolean;
  title: string;
  description: string;
  children?: ReactNode;
  onConfirm?: () => void;
  onCancel: () => void;
};

const Modal = (props: Props) => {
  const { open, title, description, children, onConfirm, onCancel } = props;

  return (
    <AntModal
      open={open}
      maskClosable={false}
      title={title}
      footer={
        <Flex justify='end' gap={8}>
          <Button type='primary' onClick={onConfirm || onCancel}>
            확인
          </Button>
          {onConfirm && <Button onClick={onCancel}>취소</Button>}
        </Flex>
      }
      onCancel={onCancel}
    >
      <div>{description}</div>
      {children && <div>{children}</div>}
    </AntModal>
  );
};

export default Modal;
