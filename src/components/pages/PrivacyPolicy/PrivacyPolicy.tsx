import { Container } from '@/atom';

export interface PrivacyPolicyProps {}

export const PrivacyPolicy = ({}: PrivacyPolicyProps) => {
  return (
    <Container as="main" className="max-w-4xl p-4 mx-auto">
      <h2 className="typography-h2">개인정보 처리방침</h2>

      <br />

      <br />

      <h4 className="typography-h4">1. 수집하는 개인정보 항목</h4>
      <p className="typography-p">
        {'<Todo>'}(‘www.example.com’이하 ‘Todo) 은 다음의 목적을 위하여 개인정보를
        처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
      </p>
      <ul className="typography-list">
        <li>이메일 주소</li>
        <li>성명</li>
        <li>주소</li>
        <li>연락처 등</li>
        <li>개인정보의 이용 목적</li>
      </ul>

      <h4 className="typography-h4">2. 서비스 제공을 위한 연락</h4>
      <ul className="typography-list">
        <li>고객 지원 및 문의 응대</li>
        <li>이벤트나 프로모션 정보 제공 등</li>
      </ul>

      <h4 className="typography-h4">2. 개인정보의 보유 및 이용 기간</h4>
      <ul className="typography-list">
        <li>
          정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유․이용기간 또는 법령에
          따른 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.
        </li>
        <li>회원 탈퇴 시까지 또는 목적 달성 후 즉시 파기</li>
      </ul>

      <h4 className="typography-h4">3. 정보주체의 권익침해에 대한 구제방법 </h4>
      <p className="typography-p">
        아래의 기관은 ToDo 과는 별개의 기관으로서, ‘ToDo` 자체적인 개인정보 불만처리,
        피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기
        바랍니다
      </p>
      <ul className="typography-list">
        <strong>개인정보 침해신고센터 (한국인터넷진흥원 운영)</strong>

        <li>소관업무 : 개인정보 침해사실 신고, 상담 신청</li>
        <li>홈페이지 : privacy.kisa.or.kr</li>
        <li>전화 : (국번없이) 118</li>
        <li>
          주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터
        </li>
      </ul>
      <ul className="typography-list">
        <strong>개인정보 분쟁조정위원회</strong>
        <li>소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)</li>
        <li>홈페이지 : www.kopico.go.kr</li>
        <li>전화 : (국번없이) 1833-6972</li>
        <li>주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층</li>
      </ul>
    </Container>
  );
};
