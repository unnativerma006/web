import ApplicationForm from "@/components/application/ApplicationForm";
import DocumentUpload from "@/components/application/DocumentUpload";
import PersonalDetails from "@/components/application/PersonalDetails";
import StepRibbon from "@/components/application/StepRibbon";
import Header from "@/components/Header";

function page() {
  return (
    <div className="bg-gray-100">
      <Header />
      <StepRibbon />
      <PersonalDetails />
      <ApplicationForm />
      <DocumentUpload />
    </div>
  );
}

export default page;
