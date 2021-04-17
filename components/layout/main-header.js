import * as S from '../../styles/styled';
import Link from './Link';

function MainHeader() {
  return (
    <S.HeaderBooks>
      <S.Logo>
        <Link href="/">Controlador de leituras</Link>
      </S.Logo>
    </S.HeaderBooks>
  );
}

export default MainHeader;
