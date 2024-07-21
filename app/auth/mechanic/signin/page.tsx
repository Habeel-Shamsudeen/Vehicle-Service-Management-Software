import SigninForm from "@/components/shared/signin-form";
import Quote from "@/components/shared/Quote";
import RepairIcon from "@/components/ui/RepairIcon";
import Link from "next/link";

export default function MechanicSignupPage() {
  return (
    <div>
      <div className="flex">
      <div className="flex items-center gap-2 p-3 md:bg-slate-100 w-1/2">
        <Link
          href="/#home"
          className="flex items-center gap-2 "
          prefetch={false}
        >
          <RepairIcon className="h-6 w-6" />
          <span className="text-xl font-bold hidden sm:block">VSMS</span>
        </Link>
      </div>
      <div className="flex justify-end gap-2 p-3 w-1/2">
        <span className="text-xl font-semibold hidden sm:block">Mechanic</span>
      </div>
      </div>
      <div className="md:grid grid-cols-2">
        <div className="hidden md:block">
          <Quote />
        </div>
        <div>
          <SigninForm type="employee"/>
        </div>
      </div>
    </div>
  );
}