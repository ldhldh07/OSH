import React from 'react';
import './CardTitle.scss';

interface CardTitleProps {
  /**
   * 스튜디오 카드, 작품 카드 등 중간 정도 섹션 타이틀
   */
  title: string;
  /**
   * 넘으면 말줄임표 넣어버리는 기준
   */
  maxWidth?: number;
}

const CardTitle = ({ title, maxWidth }: CardTitleProps) => {
  return (
    <span className="card-title" style={{ maxWidth }}>
      {title}
    </span>
  );
};

export default CardTitle;
