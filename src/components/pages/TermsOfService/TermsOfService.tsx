import { Container } from '@/atom';

export interface TermsOfServiceProps {}

export const TermsOfService = ({}: TermsOfServiceProps) => {
  return (
    <Container as="main" className="max-w-4xl p-4 mx-auto">
      <h2 className="typography-h2">서비스 이용약관</h2>

      <br />

      <br />

      <h4 className="typography-h4">1. 목적</h4>
      <p className="typography-p mb-4">
        본 약관은 Todo(이하 “회사”라 합니다)이 운영하는 웹사이트 ‘Todo` (www.example.com)
        (이하 “웹사이트”라 합니다)에서 제공하는 온라인 서비스(이하 “서비스”라 한다)를
        이용함에 있어 사이버몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로
        합니다.
      </p>

      <h4 className="typography-h4">2. 용어의 정의</h4>
      <ul className="typography-list">
        <li>
          “웹사이트”란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등
          정보통신설비를 이용하여 재화 또는 용역을 거래 할 수 있도록 설정한 가상의
          영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
        </li>
        <li>
          “이용자”란 “웹사이트”에 접속하여 서비스를 이용하는 회원 및 비회원을 말합니다.
        </li>
        <li>
          “회원”이라 함은 “웹사이트”에 개인정보를 제공하여 회원등록을 한 자로서,
          “웹사이트”의 정보를 지속적으로 제공받으며, “웹사이트”이 제공하는 서비스를
          계속적으로 이용할 수 있는 자를 말합니다.
        </li>
        <li>
          “비회원”이라 함은 회원에 가입하지 않고, “웹사이트”이 제공하는 서비스를 이용하는
          자를 말합니다.
        </li>
      </ul>

      <h4 className="typography-h4">3. 서비스 이용 조건</h4>
      <ul className="typography-list">
        <li>본 서비스를 이용하기 위해서는 회원 가입이 필요합니다.</li>
        <li>부적절한 내용의 게시물은 관리자에 의해 삭제될 수 있습니다.</li>
      </ul>

      <h4 className="typography-h4">4. 서비스 이용 제한 사항</h4>
      <ul className="typography-list">
        <li>타인의 개인정보를 유출하는 행위</li>
        <li>저작권을 침해하는 게시물 작성</li>
        <li>공공질서 및 미풍양속, 기타 사회질서를 해하는 경우</li>
        <li>
          범죄행위를 목적으로 하거나 기타 범죄행위와 관련된다고 객관적으로 인정되는 경우
        </li>
        <li>해킹 및 컴퓨터 바이러스 유포 등으로 서비스의 건전한 운영을 저해하는 경우</li>
        <li>
          기타 관계 법령에 위배되는 경우 및 회사가 이용자로서 부적당하다고 판단한 경우
        </li>
      </ul>

      <h4 className="typography-h4">5. 책임 제한</h4>
      <ul className="typography-list">
        <li>본 서비스의 이용으로 발생한 문제에 대해 어떠한 책임도 지지 않습니다.</li>
      </ul>

      <h4 className="typography-h4">6. 약관 외 준칙</h4>
      <p className="typography-p">
        본 약관에 명시되지 않은 사항이 전기통신기본법, 전기통신사업법, 정보통신촉진법,
        ‘전자상거래등에서의 소비자 보호에 관한 법률’, ‘약관의 규제에관한법률’,
        ‘전자거래기본법’, ‘전자서명법’, ‘정보통신망 이용촉진등에 관한 법률’,
        ‘소비자보호법’ 등 기타 관계 법령에 규정되어 있을 경우에는 그 규정을 따르도록 한다.
      </p>
    </Container>
  );
};
