import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection, LegalInfoBox } from "@/components/legal-layout";
import type { Lang } from "@/lib/i18n";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "이용약관 | DGI Link" },
      { name: "description", content: "DGI Link 이용약관" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

const LABEL: Record<Lang, string> = { ko: "Terms of Service", en: "Terms of Service", ja: "Terms of Service" };
const TITLE: Record<Lang, string> = {
  ko: "이용약관",
  en: "Terms of Service",
  ja: "利用規約",
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

function TermsPage() {
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
                <LegalSection heading="제1조 목적">
                  <p>
                    본 약관은 디지아이링크(이하 "회사")가 운영하는 DGI Link, CardScan AI, kFarmAI 서비스의 이용
                    조건 및 회사와 이용자 간의 권리·의무 관계를 규정합니다.
                  </p>
                </LegalSection>

                <LegalSection heading="제2조 서비스 내용">
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li><strong className="text-[color:var(--navy-deep)]">CardScan AI:</strong> 명함 OCR 인식, 연락처 저장, 만남 기록, 후속업무 관리 앱</li>
                    <li><strong className="text-[color:var(--navy-deep)]">kFarmAI:</strong> 농업·식물 AI 진단 커뮤니티 플랫폼</li>
                    <li><strong className="text-[color:var(--navy-deep)]">dgilink.com:</strong> 브랜드 홈페이지 및 정보 제공</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="제3조 이용계약 체결">
                  <p>이용자가 약관에 동의하고 서비스에 가입하거나 앱을 다운로드함으로써 이용계약이 체결됩니다. 만 14세 미만은 법정대리인의 동의가 필요합니다.</p>
                </LegalSection>

                <LegalSection heading="제4조 서비스 이용료 및 결제">
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>일부 서비스는 무료이며, 프리미엄 기능은 유료입니다.</li>
                    <li>결제는 Stripe(글로벌), 토스페이먼츠(국내)를 통해 처리됩니다.</li>
                    <li>구매 크레딧은 구매일로부터 1년간 유효합니다.</li>
                    <li>구독 서비스는 해지 전까지 자동 갱신됩니다.</li>
                    <li>환불은 관계 법령 및 회사의 환불 정책에 따릅니다.</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="제5조 이용자의 의무">
                  <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>타인의 정보 도용 또는 허위 정보 등록</li>
                    <li>불법 콘텐츠 게시·배포</li>
                    <li>서비스의 무단 복제·배포·상업적 이용</li>
                    <li>서비스 안정적 운영 방해</li>
                    <li>타인의 명예 훼손</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="제6조 서비스 제공의 중단">
                  <p>시스템 점검, 천재지변 등 불가항력적 사유 발생 시 서비스 제공을 일시 중단할 수 있습니다.</p>
                </LegalSection>

                <LegalSection heading="제7조 지식재산권">
                  <p>서비스 내 모든 콘텐츠·디자인·로고의 지식재산권은 회사에 귀속됩니다. 이용자 생성 콘텐츠의 권리는 이용자에게 있으며, 회사는 서비스 제공 목적으로만 사용합니다.</p>
                </LegalSection>

                <LegalSection heading="제8조 면책조항">
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>불가항력으로 인한 서비스 중단에 대해 책임지지 않습니다.</li>
                    <li>AI 진단 결과는 참고용이며 전문가 의견을 대체하지 않습니다.</li>
                    <li>이용자 간 거래에서 발생하는 분쟁은 당사자 간에 해결합니다.</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="제9조 분쟁 해결">
                  <p>본 약관은 대한민국 법률에 따르며, 분쟁 발생 시 회사 소재지 관할 법원에서 해결합니다.</p>
                </LegalSection>

                <LegalSection heading="제10조 사업자 정보">
                  <LegalInfoBox rows={BUSINESS_INFO.ko} />
                </LegalSection>
              </>
            )}

            {lang === "en" && (
              <>
                <LegalSection heading="1. Purpose">
                  <p>These Terms govern your use of DGI Link, CardScan AI, and kFarmAI services operated by DGI Link (디지아이링크).</p>
                </LegalSection>

                <LegalSection heading="2. Services">
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li><strong className="text-[color:var(--navy-deep)]">CardScan AI:</strong> Business card OCR, contact saving, meeting records, follow-up management</li>
                    <li><strong className="text-[color:var(--navy-deep)]">kFarmAI:</strong> Agriculture and plant AI diagnosis community platform</li>
                    <li><strong className="text-[color:var(--navy-deep)]">dgilink.com:</strong> Brand website and information</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="3. Account Registration">
                  <p>By registering or downloading our apps, you agree to these Terms. Users under 14 require parental consent.</p>
                </LegalSection>

                <LegalSection heading="4. Payments and Billing">
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>Some features are free; premium features require payment.</li>
                    <li>Payments processed via Stripe (global) and TossPayments (Korea).</li>
                    <li>Purchased credits valid for 1 year from purchase date.</li>
                    <li>Subscriptions auto-renew until cancelled.</li>
                    <li>Refunds subject to applicable law and our refund policy.</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="5. User Obligations">
                  <p>
                    You agree not to impersonate others, post illegal content, reproduce our services without
                    permission, interfere with service operations, or defame other users.
                  </p>
                </LegalSection>

                <LegalSection heading="6. Service Interruptions">
                  <p>We may temporarily suspend services for maintenance or force majeure events.</p>
                </LegalSection>

                <LegalSection heading="7. Intellectual Property">
                  <p>All service content, designs, and logos are owned by DGI Link. User-generated content remains yours; we use it only to provide our services.</p>
                </LegalSection>

                <LegalSection heading="8. Disclaimer">
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>We are not liable for interruptions due to force majeure.</li>
                    <li>AI diagnosis results are for reference only and do not replace professional advice.</li>
                    <li>User-to-user transaction disputes must be resolved between the parties.</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="9. Governing Law">
                  <p>These Terms are governed by the laws of the Republic of Korea. Disputes shall be resolved in courts of jurisdiction at our registered location.</p>
                </LegalSection>

                <LegalSection heading="10. Business Information">
                  <LegalInfoBox rows={BUSINESS_INFO.en} />
                </LegalSection>
              </>
            )}

            {lang === "ja" && (
              <>
                <LegalSection heading="第1条 目的">
                  <p>本規約は、デジアイリンク（以下「当社」）が運営するDGI Link、CardScan AI、kFarmAIサービスの利用条件を定めます。</p>
                </LegalSection>

                <LegalSection heading="第2条 サービス内容">
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li><strong className="text-[color:var(--navy-deep)]">CardScan AI：</strong>名刺OCR、連絡先保存、出会いの記録、フォローアップ管理</li>
                    <li><strong className="text-[color:var(--navy-deep)]">kFarmAI：</strong>農業・植物AI診断コミュニティプラットフォーム</li>
                    <li><strong className="text-[color:var(--navy-deep)]">dgilink.com：</strong>ブランドウェブサイト</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="第3条 利用契約">
                  <p>サービスへの登録またはアプリのダウンロードにより本規約に同意したものとみなします。14歳未満は保護者の同意が必要です。</p>
                </LegalSection>

                <LegalSection heading="第4条 料金および決済">
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>一部は無料、プレミアム機能は有料です。</li>
                    <li>Stripe（グローバル）およびTossPayments（韓国内）で処理されます。</li>
                    <li>クレジットは購入日から1年間有効です。</li>
                    <li>サブスクリプションは解約まで自動更新されます。</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="第5条 禁止事項">
                  <p>他人の情報の盗用、違法コンテンツの投稿・配布、サービスの無断複製・商業利用、運営妨害、他者の名誉毀損を禁止します。</p>
                </LegalSection>

                <LegalSection heading="第6条 免責事項">
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>不可抗力によるサービス中断について責任を負いません。</li>
                    <li>AI診断結果は参考情報であり、専門家の意見に代わりません。</li>
                    <li>利用者間取引の紛争は当事者間で解決するものとします。</li>
                  </ul>
                </LegalSection>

                <LegalSection heading="第7条 準拠法">
                  <p>本規約は大韓民国法律に準拠し、紛争は当社所在地の管轄裁判所で解決します。</p>
                </LegalSection>

                <LegalSection heading="第8条 事業者情報">
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
