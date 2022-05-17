import Support_Inquiry from "./Support_FAQ";
import Support_QnA from "./Support_FAQ";
import Support_FAQ from "./Support_QnA";

function SupportPage() {
  return (
    <>
      <div>
        <Support_Inquiry />
        <Support_FAQ />
        <Support_QnA />
      </div>
    </>
  );
}

export default SupportPage;
