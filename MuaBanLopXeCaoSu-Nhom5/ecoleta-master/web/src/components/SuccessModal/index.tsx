import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

const SuccessModal = () => {
  const history = useHistory();

  return (
    <div id="modal-success">
      <FiCheckCircle />
      <strong>Đăng ký hoàn tất</strong>
      <button onClick={() => history.push('/')} type="button">Trở về trang chủ</button>
    </div>
  )
}

export default SuccessModal;
