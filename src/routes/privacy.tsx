import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection, LegalInfoBox } from "@/components/legal-layout";
import type { Lang } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "개인정보처리방침 | DGI Link" },
      { name: "description", content: "DGI Link 개인정보처리방침" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

const LABEL: Record<Lang, string> = { ko: "Privacy Policy", en: "Privacy Policy", ja: "Privacy Policy" };
const TITLE: Record<Lang, string> = {
  ko: "개인정보처리방침",
  en: "Privacy Policy",
  ja: "プライバシーポリシー",
};
const DATE: Record<Lang, string> = {
  ko: "시행일: 2026년 06월 18일  |  최종 수정일: 2026년 06월 18일",
  en: "Effective: June 18, 2026  |  Last Updated: June 18, 2026",
  ja: "施行日：2026年06月18日　|　最終更新：2026年06月18日",
};

const BUSINESS_INFO: Record<Lang, Array<{ label: string; value: string }>> = {
  ko: [
    { label: "상호명", value: "디지아이링크" },
    { label: "대표자", value: "송성민" },
    { label: "주소", value: "전라남도 순천시 해룡면 좌야로 150, 701동 506호" },
    { label: "통신판매업 신고번호", value: "제 2026-전남순천-7250 호" },
    { label: "이메일", value: "contact@dgilink.com" },
  ],
  en: [
    { label: "Company", value: "DGI Link (디지아이링크)" },
    { label: "Representative", value: "Seongmin Song" },
    { label: "Address", value: "701-506, Jwaya-ro 150, Haeryong-myeon, Suncheon-si, Jeollanam-do, Korea" },
    { label: "Mail Order No.", value: "제 2026-전남순천-7250 호" },
    { label: "Email", value: "contact@dgilink.com" },
  ],
  ja: [
    { label: "社名", value: "デジアイリンク（DGI Link）" },
    { label: "代表者", value: "ソン・ソンミン" },
    { label: "所在地", value: "韓国 全羅南道 順天市 海龍面 佐野路 150, 701棟 506号" },
    { label: "通信販売業届出番号", value: "제 2026-전남순천-7250 호" },
    { label: "メール", value: "contact@dgilink.com" },
  ],
};

const SERVICE_PROVIDERS: Record<Lang, Array<{ label: string; value: string }>> = {
  ko: [
    { label: "Anthropic (Claude API)", value: "AI 진단 처리" },
    { label: "Supabase", value: "데이터베이스 저장" },
    { label: "Stripe", value: "글로벌 결제 처리" },
    { label: "토스페이먼츠", value: "국내 결제 처리" },
  ],
  en: [
    { label: "Anthropic (Claude API)", value: "AI processing" },
    { label: "Supabase", value: "Database storage" },
    { label: "Stripe", value: "Global payment processing" },
    { label: "TossPayments", value: "Korea payment processing" },
  ],
  ja: [
    { label: "Anthropic (Claude API)", value: "AI処理" },
    { label: "Supabase", value: "データベース保存" },
    { label: "Stripe", value: "グローバル決済処理" },
    { label: "TossPayments", value: "韓国内決済処理" },
  ],
};

function PrivacyPage() {
  return (
    <LegalLayout>
      {(lang) => (
        <>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-green)]">
            {LABEL[lang]}
          </p>
          <h1 className="mt-3 font-display text-[28px] font-bold leading-tight tracking-tight text-[color:var(--navy-deep)] sm:text-[36px]">
            {TITLE[lang]}
          </h1>
          <p className="mt-2 border-b border-border pb-6 text-sm text-muted-foreground">{DATE[lang]}</p>

          <div className="mt-10">
            {lang === "ko" && (
              <>
                <LegalSection heading="제1조 개인정보 수집 목적 및 항목">
                  <p>디지아이링크(이하 "회사")는 아래의 목적으로 개인정보를 수집합니다.</p>
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li><strong className="text-[color:var(--navy-deep)]">CardScan AI:</strong> 명함 OCR 인식, 연락처 저장, 만남 기록, 서비스 제공 및 결제 처리</li>
                    <li><strong className="text-[color:var(--navy-deep)]">kFarmAI:</strong> 커뮤니티 서비스 제공, AI 진단, 농자재 정보 제공</li>
                    <li><strong className="text-[color:var(--navy-deep)]">웹사이트:</strong> 문의 응대, 서비스 개선, 통계 분석</li>
                  </ul>
                  <p>수집하는 개인정보 항목:</p>
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>필수: 이메일 주소, 기기 식별자</li>
                    <li>결제 시: 결제 수단 정보 (Stripe·토스페이먼츠를 통해 처리, 회사는 저장하지 않음)</li>
                    <li>선택: 이름, 전화번호, 직책, 회사명</li>
                    <li>자동 수집: IP 주소, 브라우저 정보, 접속 로그, 쿠키</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="제2조 개인정보 보유 및 이용 기간">
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>회원 탈퇴 시까지 (탈퇴 후 30일 이내 파기)</li>
                    <li>
                      관계 법령에 따른 보존 기간:
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>전자상거래 관련 기록: 5년</li>
                        <li>소비자 불만·분쟁 기록: 3년</li>
                        <li>접속 로그: 3개월</li>
                      </ul>
                    </li>
                  </ul>
                </LegalSection>

                <LegalSection heading="제3조 개인정보의 제3자 제공">
                  <p>회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 단, 아래의 경우는 예외입니다.</p>
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>이용자가 사전에 동의한 경우</li>
                    <li>법령의 규정에 의거하거나 수사기관의 요구가 있는 경우</li>
                  </ul>
                  <p>결제 처리를 위해 Stripe(글로벌), 토스페이먼츠(국내)에 최소한의 정보가 전달됩니다.</p>
                </LegalSection>

                <LegalSection heading="제4조 개인정보 처리 위탁">
                  <LegalInfoBox rows={SERVICE_PROVIDERS.ko} />
                </LegalSection>

                <LegalSection heading="제5조 정보주체의 권리">
                  <p>이용자는 언제든지 개인정보 열람·정정·삭제·처리정지를 요청할 수 있습니다.</p>
                  <p>요청: <strong className="text-[color:var(--navy-deep)]">contact@dgilink.com</strong> → 7일 이내 처리</p>
                </LegalSection>

                <LegalSection heading="제6조 쿠키 정책">
                  <p>서비스 개선을 위해 쿠키를 사용할 수 있습니다. 브라우저 설정을 통해 거부할 수 있으나 일부 서비스가 제한될 수 있습니다.</p>
                </LegalSection>

                <LegalSection heading="제7조 사업자 및 개인정보 보호책임자 정보">
                  <LegalInfoBox rows={BUSINESS_INFO.ko} />
                </LegalSection>
              </>
            )}

            {lang === "en" && (
              <>
                <LegalSection heading="1. Information We Collect">
                  <p>DGI Link (디지아이링크) collects the following information to provide our services:</p>
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li><strong className="text-[color:var(--navy-deep)]">CardScan AI:</strong> Business card OCR, contact saving, meeting records, payments</li>
                    <li><strong className="text-[color:var(--navy-deep)]">kFarmAI:</strong> Community services, AI diagnosis, agricultural information</li>
                    <li><strong className="text-[color:var(--navy-deep)]">Website:</strong> Inquiry responses, service improvement, analytics</li>
                  </ul>
                  <p>Information collected:</p>
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>Required: Email address, device identifier</li>
                    <li>Payment: Processed via Stripe / TossPayments — not stored by us</li>
                    <li>Optional: Name, phone number, job title, company name</li>
                    <li>Automatic: IP address, browser info, access logs, cookies</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="2. Data Retention">
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>Until account deletion (deleted within 30 days of closure)</li>
                    <li>As required by law: e-commerce records 5 years, dispute records 3 years, access logs 3 months</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="3. Sharing Your Information">
                  <p>
                    We do not sell or share your data except with your consent, when required by law, or
                    minimally with Stripe and TossPayments for payment processing.
                  </p>
                </LegalSection>

                <LegalSection heading="4. Service Providers">
                  <LegalInfoBox rows={SERVICE_PROVIDERS.en} />
                </LegalSection>

                <LegalSection heading="5. Your Rights">
                  <p>You may request access, correction, deletion, or restriction of your data at any time.</p>
                  <p>Contact: <strong className="text-[color:var(--navy-deep)]">contact@dgilink.com</strong> → Response within 7 business days</p>
                </LegalSection>

                <LegalSection heading="6. Cookies">
                  <p>We use cookies to improve our services. You may disable them via browser settings, though some features may be limited.</p>
                </LegalSection>

                <LegalSection heading="7. Business Information">
                  <LegalInfoBox rows={BUSINESS_INFO.en} />
                </LegalSection>
              </>
            )}

            {lang === "ja" && (
              <>
                <LegalSection heading="第1条 個人情報の収集目的および項目">
                  <p>デジアイリンク（以下「当社」）は以下の目的で個人情報を収集します。</p>
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li><strong className="text-[color:var(--navy-deep)]">CardScan AI：</strong>名刺OCR認識、連絡先保存、出会いの記録、決済処理</li>
                    <li><strong className="text-[color:var(--navy-deep)]">kFarmAI：</strong>コミュニティサービス、AI診断、農業情報提供</li>
                    <li><strong className="text-[color:var(--navy-deep)]">ウェブサイト：</strong>お問い合わせ対応、サービス改善</li>
                  </ul>
                  <p>収集する情報：</p>
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>必須：メールアドレス、デバイス識別子</li>
                    <li>決済時：Stripe・TossPayments経由で処理（当社は保存しません）</li>
                    <li>任意：氏名、電話番号、役職、会社名</li>
                    <li>自動収集：IPアドレス、ブラウザ情報、アクセスログ、Cookie</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="第2条 保有期間">
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>退会時まで（退会後30日以内に削除）</li>
                    <li>法令による保存：電子商取引記録5年、紛争記録3年、ログ3ヶ月</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="第3条 第三者提供">
                  <p>原則として第三者に提供しません。同意がある場合、法令による場合、またはStripe・TossPaymentsへの最小限の決済情報提供を除きます。</p>
                </LegalSection>

                <LegalSection heading="第4条 委託先">
                  <LegalInfoBox rows={SERVICE_PROVIDERS.ja} />
                </LegalSection>

                <LegalSection heading="第5条 お客様の権利">
                  <p>個人情報の閲覧・訂正・削除・処理停止をいつでも請求できます。</p>
                  <p>お問い合わせ：<strong className="text-[color:var(--navy-deep)]">contact@dgilink.com</strong> → 7営業日以内に対応</p>
                </LegalSection>

                <LegalSection heading="第6条 Cookie">
                  <p>サービス改善のためCookieを使用する場合があります。ブラウザ設定で拒否できますが、一部機能が制限される場合があります。</p>
                </LegalSection>

                <LegalSection heading="第7条 事業者情報">
                  <LegalInfoBox rows={BUSINESS_INFO.ja} />
                </LegalSection>
              </>
            )}
          </div>
        </>
      )}
    </LegalLayout>
  );
}
