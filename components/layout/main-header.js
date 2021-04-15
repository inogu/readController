import * as S from '../../styles/styled';
import Link from 'next/link';

function MainHeader() {
  return (
    <S.HeaderBooks>
      <S.Logo>
        <Link href="/">NextEvents</Link>
      </S.Logo>
    </S.HeaderBooks>
  );
}

export default MainHeader;
